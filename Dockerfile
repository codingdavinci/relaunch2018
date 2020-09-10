FROM composer:1.10 AS COMPOSER_CHAIN
MAINTAINER Michael Büchner <m.buechner@dnb.de>
RUN apk add --no-cache libpng libpng-dev libjpeg-turbo-dev libwebp-dev zlib-dev libxpm-dev
RUN docker-php-ext-install gd
COPY / /tmp/cdv
WORKDIR /tmp/cdv
RUN composer install --no-dev
# Add git tag version to PHP file
RUN { \
		echo -e "<\x21-- $(git describe --tags) -->"; \
	} >> /tmp/cdv/web/themes/custom/relaunch2018/templates/html.html.twig	

# from https://github.com/docker-library/drupal/blob/master/8.7/apache/Dockerfile
FROM php:7.4-apache
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
		--with-freetype \
		--with-jpeg; \
	docker-php-ext-install -j "$(nproc)" \
		gd \
		opcache \
		pdo_mysql \
		pdo_pgsql \
		zip; \
	pecl install uploadprogress apcu; \
	docker-php-ext-enable uploadprogress apcu; \
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
		echo "opcache.file_update_protection=0"; \
		echo "opcache.validate_timestamps=0"; \
		echo "opcache.interned_strings_buffer=16"; \
		echo "opcache.memory_consumption=128"; \
		echo "opcache.max_accelerated_files=4000"; \
		echo "opcache.max_wasted_percentage=10"; \
		echo "opcache.revalidate_freq=60"; \
	} > /usr/local/etc/php/conf.d/opcache-recommended.ini
RUN { \
		echo "apc.enabled=1"; \
		echo "apc.file_update_protection=2"; \ 
		echo "apc.optimization=0"; \ 
		echo "apc.shm_size=256M"; \ 
		echo "apc.include_once_override=0"; \ 
		echo "apc.shm_segments=1"; \ 
		echo "apc.ttl=7200"; \ 
		echo "apc.user_ttl=7200"; \ 
		echo "apc.gc_ttl=3600"; \ 
		echo "apc.num_files_hint=1024"; \ 
		echo "apc.enable_cli=0"; \ 
		echo "apc.max_file_size=5M"; \ 
		echo "apc.cache_by_default=1"; \ 
		echo "apc.use_request_time=1"; \ 
		echo "apc.slam_defense=0"; \ 
		echo "apc.mmap_file_mask=/tmp/apc.XXXXXX"; \ 
		echo "apc.stat_ctime=0"; \ 
		echo "apc.canonicalize=1"; \ 
		echo "apc.write_lock=1"; \ 
		echo "apc.report_autofilter=0"; \ 
		echo "apc.rfc1867=0"; \ 
		echo "apc.rfc1867_prefix =upload_"; \ 
		echo "apc.rfc1867_name=APC_UPLOAD_PROGRESS"; \ 
		echo "apc.rfc1867_freq=0"; \ 
		echo "apc.rfc1867_ttl=3600"; \ 
		echo "apc.lazy_classes=0"; \ 
		echo "apc.lazy_functions=0"; \
	} > /usr/local/etc/php/conf.d/apcu-caching.ini
RUN { \
		echo "upload_max_filesize = 128M"; \
		echo "post_max_size = 128M"; \
		echo "memory_limit = 512M"; \
		echo "max_execution_time = 600"; \
		echo "max_input_vars = 5000"; \
	} > /usr/local/etc/php/conf.d/0-upload_large_dumps.ini

WORKDIR /var/www/html
COPY --from=COMPOSER_CHAIN /tmp/cdv/ .
COPY docker-php-entrypoint-drupal.sh /usr/local/bin/docker-php-entrypoint-drupal
RUN chmod 775 /usr/local/bin/docker-php-entrypoint-drupal
RUN find . -type d -exec chmod 755 {} \;
RUN find . -type f -exec chmod 644 {} \;
RUN chown -R www-data:www-data web/sites web/modules web/themes web/tmp
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
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["docker-php-entrypoint-drupal"]

HEALTHCHECK --interval=1m --timeout=3s CMD curl --fail http://localhost/ || exit 1

EXPOSE 80
CMD ["apache2-foreground"]

