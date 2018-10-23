# codingdavinci.de relaunch 2018

## About

Coding da Vinci is the first German open cultural data hackathon. Founded in Berlin in 2014, Coding da Vinci is a project that encourages and supports GLAM institutions (galleries, libraries, archives, museums) to share the digital records of their collections online under open licenses. It achieves this by making an extended hackathon-style event that brings those datasets (and the curators that manage them) into contact with the creative tech and open data communities, showing what can be possible when this kind of data is made open.

The website [codingdavinci.de](https://codingdavinci.de/) was launched in early 2014 in advance of the first Coding da Vinci event in Berlin, 26-27th April 2014. At that time, the website was built to communicate a single event, with the possibility that it might become a yearly event in Berlin. Since these beginnings, Coding da Vinci has grown from a single central annual event to a bigger project with multiple regional events, often running in parallel, managed by regional event teams, with growing collections of open datasets and the creative projects they have inspired. High time for a relaunch!

Task management: Tasks are broken down as [issues](https://github.com/codingdavinci/relaunch2018/issues) and prioritised/tracked in the ["Relaunch 2018" project kanban](https://github.com/codingdavinci/relaunch2018/projects/1).

Contact: lucy.patterson@wikimedia.de (@lucyWMDE)

## Installation

The project was set up using the [Composer template for Drupal projects](https://github.com/drupal-composer/drupal-project). Installation requires [Composer](https://getcomposer.org/) for managing PHP packages and [npm](https://www.npmjs.com/), which is bundled with [Node.js](https://nodejs.org/), for JavaScript packages.

1. Pull the repository contents.
2. Run `composer install` (using flag `--no-dev` in production environment) to download all required components available on [packagist.org](https://packagist.org/).
3. Run `npm install` to download all required packages available on [npmjs.com](https://www.npmjs.com/).
4. Run `gulp`, which is installed through npm, to copy files loaded by npm to appropriate directories and to compile SCSS to CSS files.
5. Configure the web root to point to the `web` subdirectory.
6. The CMS installation may be run by using a browser to access the web interface in the domain’s base path as configured in step 5. During the installation process, select the “Config Installer” installation profile to import configuration from `../config/sync`.
7. To set up [Matomo](https://matomo.org/) tracking, go to `<domain>/admin/config/system/matomo`.

## Updating

Drupal nudges administrators about available security updates. When updating Drupal core or when applying a Drupal module’s new major version, a backup of the website’s files should be created. The database may be dumped to a file by running `vendor/bin/drush sql-dump` using the [drush command line shell](http://www.drush.org/). Updating is easiest using composer in combination with drush.

Updates should be applied in a development environment first: Run `composer update drupal/core webflo/drupal-core-require-dev --with-dependencies` for minor version updates or `composer require <component>:<new version constraint>` for major version updates. After ensuring that the update works properly, push the changes to the `composer.lock` file to the repository.

Updating npm packages is similar: Run `npm update` for minor version updates or `npm install <package name>@<version constraint>` for major version updates. Run `gulp` to ensure updated files are copied to their appropriate places. After ensuring that the update works properly, push the changes to the `package-lock.json` file to the repository.

In the production environment, pull the updated repository and run:
1. `composer install` to synchronize composer components.
2. `npm install` to synchronize npm packages.
3. `gulp` to copy updated npm package files to their appropriate places.
4. `vendor/bin/drush updatedb` to run potential database updates.
5. `vendor/bin/drush cr` to rebuild the cache.

*Never run composer commands other than `composer install --no-dev` and npm commands other than `npm install` in production environment!*

- For detailed instructions on how to update Drupal core, see https://www.drupal.org/docs/8/update/update-core-via-composer.
- For instructions on how to update contributed Drupal modules, see https://www.drupal.org/docs/8/update/update-modules.

## Synchronizing configuration

The site’s configuration is stored in the repository for having it applied when installing the project. Eventually, site maintainers will change configuration in the production environment. In order for plain development installations to be configured properly, it is recommended to sync back configuration changes made in production to the repository from time to time by exporting the configuration and pushing it to the repository. Configuration may be exported by running `vendor/bin/drush cex`, which will overwrite the files in `../config/sync`. Those files would need to be pushed to the repository.
