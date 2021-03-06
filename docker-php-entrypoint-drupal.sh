#!/bin/sh
set +e
echo "Start Drupal Update DB..."
/var/www/html/vendor/bin/drush --root /var/www/html/web updatedb
echo "Start Drupal Cache Rebuild..."
/var/www/html/vendor/bin/drush --root /var/www/html/web cache-rebuild
echo "Start Drupal Core Cron..."
/var/www/html/vendor/bin/drush --root /var/www/html/web --quiet cron

set -e
docker-php-entrypoint

exec "$@"
