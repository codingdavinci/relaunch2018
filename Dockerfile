FROM composer:1.9 AS COMPOSER_CHAIN
MAINTAINER Michael Büchner <m.buechner@dnb.de>
RUN apk add --no-cache libpng libpng-dev libjpeg-turbo-dev libwebp-dev zlib-dev libxpm-dev
RUN docker-php-ext-install gd
COPY / /tmp/cdv
WORKDIR /tmp/cdv
RUN composer install --no-dev

# from https://github.com/docker-library/drupal/blob/master/8.7/apache/Dockerfile
FROM php:7.3-apache
MAINTAINER Michael Büchner <m.buechner@dnb.de>
RUN set -eux; \
	if command -v a2enmod; then \
		a2enmod rewrite; \
	fi; \
	savedAptMark="$(apt-mark showmanual)"; \
	apt-get update; \
	apt-get install -y --no-install-recommends \
		libfreetype6-dev \
		libjpeg-dev \
		libpng-dev \
		libpq-dev \
		libzip-dev; \
	docker-php-ext-configure gd \
		--with-freetype-dir=/usr \
		--with-jpeg-dir=/usr \
		--with-png-dir=/usr; \
	docker-php-ext-install -j "$(nproc)" \
		gd \
		opcache \
		pdo_mysql \
		pdo_pgsql \
		zip; \
	apt-mark auto '.*' > /dev/null; \
	apt-mark manual $savedAptMark; \
	ldd "$(php -r 'echo ini_get("extension_dir");')"/*.so \
		| awk '/=>/ { print $3 }' \
		| sort -u \
		| xargs -r dpkg-query -S \
		| cut -d: -f1 \
		| sort -u \
		| xargs -rt apt-mark manual; \
	apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false;

RUN { \
		echo "opcache.memory_consumption=128"; \
		echo "opcache.interned_strings_buffer=8"; \
		echo "opcache.max_accelerated_files=4000"; \
		echo "opcache.revalidate_freq=60"; \
		echo "opcache.fast_shutdown=1"; \
	} > /usr/local/etc/php/conf.d/opcache-recommended.ini
RUN { \
		echo "upload_max_filesize = 128M"; \
		echo "post_max_size = 128M"; \
		echo "memory_limit = 512M"; \
		echo "max_execution_time = 600"; \
		echo "max_input_vars = 5000"; \
	} > /usr/local/etc/php/conf.d/0-upload_large_dumps.ini

WORKDIR /var/www/html
COPY --from=COMPOSER_CHAIN /tmp/cdv/ .
COPY docker-php-entrypoint-drupal /usr/local/bin/
RUN find . -type d -exec chmod 755 {} \;
RUN find . -type f -exec chmod 644 {} \;
RUN chown -R www-data:www-data web/sites web/modules web/themes web/tmp
# Drush usage:  /var/www/html/vendor/bin/drush --root /var/www/html/web updatedb
# ...and: /var/www/html/vendor/bin/drush --root /var/www/html/web cache-rebuild
# ...and: /var/www/html/vendor/bin/drush --root /var/www/html/web core-cron
RUN chmod +x /var/www/html/vendor/drush/drush/drush
RUN { \
		echo "<VirtualHost *:80>"; \
		echo "  ServerAdmin mbuechner@dnb.de"; \
		echo "  DocumentRoot /var/www/html/web"; \
		echo "  ErrorLog ${APACHE_LOG_DIR}/error.log"; \
		echo "  CustomLog ${APACHE_LOG_DIR}/access.log combined"; \
		echo "</VirtualHost>"; \
	} > /etc/apache2/sites-enabled/000-default.conf

# Clean system
RUN rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["docker-php-entrypoint-drupal"]

HEALTHCHECK --interval=1m --timeout=3s CMD curl --fail http://localhost/ || exit 1

EXPOSE 80
