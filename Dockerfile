FROM composer:2 AS cchain
COPY . /tmp/cdv
WORKDIR /tmp/cdv
ARG VCS_REF=unknown
ARG VCS_TAG=unknown
LABEL org.opencontainers.image.revision=$VCS_REF \
      org.opencontainers.image.version=$VCS_TAG
ENV APP_COMMIT=$VCS_REF APP_VERSION=$VCS_TAG
RUN composer install --no-dev --no-interaction --no-progress --prefer-dist --optimize-autoloader

# Add git tag version to PHP file
RUN set -eu; \
    ver_esc="$(printf '%s' "$APP_VERSION" | sed 's/[\/&]/\\&/g')"; \
    { \
        echo -e "$APP_VERSION"; \
    } >> /tmp/cdv/version;

FROM php:8.3-fpm-alpine
LABEL org.opencontainers.image.authors="m.buechner@dnb.de"

# Install packages
RUN apk --no-cache add \
    curl \
    nginx \
    nginx-mod-http-brotli \
    redis \
    supervisor; \
    apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/community \
    supercronic;

RUN set -eux; \
     \
     apk add --no-cache --virtual .build-deps \
          coreutils \
          freetype-dev \
          libjpeg-turbo-dev \
          libpng-dev \
          libwebp-dev \
          libavif-dev \
          libzip-dev \
          pcre-dev \
          autoconf \
          g++ \
          make \
          git \
          openssl \
          # postgresql-dev is needed for https://bugs.alpinelinux.org/issues/3642
          postgresql-dev; \
     \
     docker-php-ext-configure gd \
          --with-freetype \
          --with-jpeg \
          --with-webp \
          --with-avif; \
     \
     docker-php-ext-install -j "$(nproc)" \
          gd \
          opcache \
          pdo_mysql \
          pdo_pgsql \
          zip; \
     pecl channel-update pecl.php.net; \
     pecl install apcu oauth redis; \
     docker-php-ext-enable apcu oauth redis; \
     \
     runDeps="$( \
          scanelf --needed --nobanner --format '%n#p' --recursive /usr/local \
               | tr ',' '\n' \
               | sort -u \
               | awk 'system("[ -e /usr/local/lib/" $1 " ]") == 0 { next } { print "so:" $1 }' \
     )"; \
     \
     apk add --no-network --virtual .drupal-phpexts-rundeps $runDeps;

ENV RUN_USER=nobody
ENV RUN_GROUP=0

# add PHP config
COPY --chown=${RUN_USER}:${RUN_GROUP} ./config/php/ /usr/local/etc/php/conf.d/

# add NGINX config
COPY --chown=${RUN_USER}:${RUN_GROUP} ./config/nginx/*.conf /etc/nginx/
COPY --chown=${RUN_USER}:${RUN_GROUP} ./config/nginx/mime.types /etc/nginx/mime.types
COPY --chown=${RUN_USER}:${RUN_GROUP} ./config/nginx/conf.d/ /etc/nginx/conf.d/ 
COPY --chown=${RUN_USER}:${RUN_GROUP} ./config/nginx/.authpasswd /etc/nginx/.authpasswd

# add cron jobs
COPY --chown=${RUN_USER}:${RUN_GROUP} ./config/cron/* /etc/crontabs/

# add supervisord config
COPY --chown=${RUN_USER}:${RUN_GROUP} ./config/supervisord/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Add application
WORKDIR /var/www/html
COPY --chown=${RUN_USER}:${RUN_GROUP} --from=cchain /tmp/cdv/ .
ENV PATH=${PATH}:/var/www/html/vendor/bin

RUN \
    # Use the default PHP production configuration
    mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"; \
    \
    # Move entrypoint script in place
    mv scripts/docker-php-entrypoint-drupal.sh /usr/local/bin/docker-php-entrypoint-drupal; \
    mv scripts/drupal-maintenance.sh /usr/local/bin/drupal-maintenance; \
    \
    # Generate self-signed ECDSA certificate for local HTTP2
    openssl req -x509 -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -nodes -sha256 \
      -keyout /etc/ssl/mykey.pem \
      -out /etc/ssl/mycert.pem \
      -days 3650 \
      -subj "/C=DE/ST=DE/L=Frankfurt am Main/O=Deutsche Nationalbibliothek/OU=GD.DDB/CN=Coding da Vinci"; \
    \
    # Make sure files/folders needed by the processes are accessable when they run under the nobody user
    mkdir /var/cache/nginx; \
    chgrp -R ${RUN_GROUP} /run /var/cache/nginx/ /var/lib/nginx/ /var/log/nginx/ /var/www/html/ /etc/ssl/mycert.pem /etc/ssl/mykey.pem /etc/nginx/.authpasswd; \
    chmod -R g=u /run/ /etc/nginx/conf.d/ /etc/nginx/*.conf /var/cache/nginx/ /var/lib/nginx/ /var/log/nginx/ /var/www/html/ /etc/ssl/mycert.pem /etc/ssl/mykey.pem /etc/nginx/.authpasswd; \
    chmod 751 /usr/local/bin/docker-php-entrypoint-drupal /usr/local/bin/drupal-maintenance /var/www/html/vendor/drush/drush/drush /var/www/html/web/sites/default; \
    chmod 440 /var/www/html/web/sites/default/settings.php /var/www/html/web/sites/default/services.yml; \
    \
    # add permissions for suervisor & nginx user
    touch /run/supervisord.pid && chgrp -R ${RUN_GROUP} /run/supervisord.pid && chmod -R g=u /run/supervisord.pid; \
    touch /run/nginx/nginx.pid && chgrp -R ${RUN_GROUP} /run/nginx/nginx.pid && chmod -R g=u /run/nginx/nginx.pid; \
    \
    # cleanup
    rm -rf ./config/cron ./config/nginx ./config/php ./config/supervisord; \
    docker-php-source delete || true; \
    rm -rf /usr/src/php*; \
    apk del --no-network .build-deps; \
    pecl clear-cache || true; \
    rm -rf /tmp/* /var/tmp/* /root/.cache /tmp/pear;

# Switch to use a non-root user
USER ${RUN_USER}:${RUN_GROUP}

ENTRYPOINT ["docker-php-entrypoint-drupal"]

# Expose the ports for nginx
EXPOSE 8080 4430

# supervisord starts nginx & php-fpm
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
