#!/bin/sh
UPDATEDB_ON_STARTUP="${UPDATEDB_ON_STARTUP:-no}";
CACHEREBUILD_ON_STARTUP="${CACHEREBUILD_ON_STARTUP:-no}";
REDIS_MAXMEMORY="${REDIS_MAXMEMORY:-1gb}";
USE_REDIS="${USE_REDIS:-no}";

if [ "$UPDATEDB_ON_STARTUP" = "yes" ]; then
  echo "Start Drupal Update DB...";
  /var/www/html/vendor/bin/drush -y --root /var/www/html/web updatedb;
fi;

if [ "$CACHEREBUILD_ON_STARTUP" = "yes" ]; then
  echo "Start Drupal Cache Rebuild...";
  /var/www/html/vendor/bin/drush -y --root /var/www/html/web cache-rebuild;
fi;

if [ "$USE_REDIS" = "yes" ]; then
  # check if Redis is ready for 180 sec.
  for i in $(seq 1 180); do
    if (/usr/bin/redis-cli ping 2>&1 /dev/null); then
      /usr/bin/redis-cli config set maxmemory "${REDIS_MAXMEMORY}";
      /usr/bin/redis-cli config set maxmemory-policy volatile-lru;
      echo "Set Redis configuration successfully.";
      break;
    fi;
    echo "Redis is not ready (since $i sec.)...";
    sleep 1.0;
  done
fi;
