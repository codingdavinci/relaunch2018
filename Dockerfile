FROM composer:1.9 AS COMPOSER_CHAIN
MAINTAINER Michael Büchner <m.buechner@dnb.de>
RUN apk add --no-cache libpng libpng-dev libjpeg-turbo-dev libwebp-dev zlib-dev libxpm-dev
RUN docker-php-ext-install gd
COPY / /tmp/cdv
WORKDIR /tmp/cdv
RUN composer install --no-dev

# from https://github.com/docker-library/drupal/blob/master/8.7/apache/Dockerfile
FROM php:7.3-apache-buster
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

WORKDIR /var/www/html
COPY --from=COMPOSER_CHAIN /tmp/cdv/ .
COPY settings.php ./web/sites/default/
RUN chown -R www-data:www-data web/sites web/modules web/themes
RUN { \
		echo "<VirtualHost *:80>"; \
		echo "  ServerAdmin webmaster@localhost"; \
		echo "  DocumentRoot /var/www/html/web"; \
		echo "  ErrorLog ${APACHE_LOG_DIR}/error.log"; \
		echo "  CustomLog ${APACHE_LOG_DIR}/access.log combined"; \
		echo "</VirtualHost>"; \
	} > /etc/apache2/sites-enabled/000-default.conf

# install Certbot, see https://certbot.eff.org/lets-encrypt/debianbuster-apache
RUN apt-get -y install certbot python-certbot-apache
RUN rm -rf /var/lib/apt/lists/*

HEALTHCHECK --interval=1m --timeout=3s CMD curl --fail http://localhost/ || exit 1

EXPOSE 8080