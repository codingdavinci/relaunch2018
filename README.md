![PHP Composer](https://github.com/codingdavinci/relaunch2018/workflows/PHP%20Composer/badge.svg) ![Docker](https://github.com/codingdavinci/relaunch2018/workflows/Docker/badge.svg) [![Cypress](https://github.com/codingdavinci/relaunch2018/actions/workflows/ci.yml/badge.svg)](https://github.com/codingdavinci/relaunch2018/actions/workflows/ci.yml)
# codingdavinci.de relaunch 2018

## About

Coding da Vinci is the first German open cultural data hackathon. Founded in Berlin in 2014, Coding da Vinci is a project that encourages and supports GLAM institutions (galleries, libraries, archives, museums) to share the digital records of their collections online under open licenses. It achieves this by making an extended hackathon-style event that brings those datasets (and the curators that manage them) into contact with the creative tech and open data communities, showing what can be possible when this kind of data is made open.

The website [codingdavinci.de](https://codingdavinci.de/) was launched in early 2014 in advance of the first Coding da Vinci event in Berlin, 26-27th April 2014. At that time, the website was built to communicate a single event, with the possibility that it might become a yearly event in Berlin. Since these beginnings, Coding da Vinci has grown from a single central annual event to a bigger project with multiple regional events, often running in parallel, managed by regional event teams, with growing collections of open datasets and the creative projects they have inspired. High time for a relaunch!

Task management: Tasks are broken down as [issues](https://github.com/codingdavinci/relaunch2018/issues) and prioritised/tracked in the ["Relaunch 2018" project kanban](https://github.com/codingdavinci/relaunch2018/projects/1).

Contact: lucy.patterson@wikimedia.de (@lucyWMDE)

## Installation

The project was set up using the [Composer template for Drupal projects](https://github.com/drupal-composer/drupal-project). Installation requires [Composer](https://getcomposer.org/) for managing PHP packages.

### Production

1. Pull the repository contents.
2. Run `composer install --no-dev` to download required components.
3. Configure the web root to point to the `web` subdirectory.
4. The CMS installation may be run by using a browser to access the web interface in the domain’s base path as configured in step 3. During the installation process, select the “Config Installer” installation profile to import configuration from `../config/sync`. (Setup will cause an error due to [Drupal issue #2756331](https://www.drupal.org/project/drupal/issues/2756331).)
5. In order to fill the Drupal instance with already created content, manually import the preexisting database dump to the database and customise the temp directory on `<domain>/admin/config/media/file-system` afterwards. Additionally, fill the `web/sites/default/files` directory with the files corresponding to the database dump. (Initially, database dump and file directory contents will be provided by exporting those from staging.)
6. To set up [Matomo](https://matomo.org/) tracking, go to `<domain>/admin/config/system/matomo`.

### Development

* Skip the `--no-dev` flag when running `composer install`.
* In order to compile [SCSS files](https://sass-lang.com/) files and transpile ES6 JavaScript files, it is recommended to have [Node.js](https://nodejs.org/) installed. Packages are managed by the [yarn package manager](https://yarnpkg.com/). Having installed Node.js and yarn (i.e. `npm install -g yarn`), run `yarn` to download required packages.
* [Gulp](https://gulpjs.com/) tasks are set up for processing the SCSS files. After having installed the Gulp CLI (i.e. `npm install -g gulp-cli`), you can run `gulp` every time SCSS files need to be compiled.
* ES6 JavaScript transpiling may be done using a yarn script supplied by Drupal core: `yarn build:js`. (Watch [Drupal issue #2957390](https://www.drupal.org/project/drupal/issues/2957390) for removing the `package.json` file duplicated in the root at some point in the future.)

## Updating

Drupal nudges administrators about available security updates. When updating Drupal core or when applying a Drupal module’s new major version, a backup of the website’s files should be created. The database may be dumped to a file by running `vendor/bin/drush sql-dump` using the [drush command line shell](http://www.drush.org/). Updating is easiest using composer in combination with drush.

Updates should be applied in a development environment first: Run `composer update` for minor version updates or `composer require <component>:<new version constraint>` for major version updates. After ensuring that the update works properly, push the changes to the `composer.lock` and `composer.json` file to the repository.

While just being required for development, updating yarn packages is similar: Run `yarn upgrade` for minor version updates or `yarn upgrade <package name>@<version constraint>` for major version updates and push the changes to `yarn.lock` and the `package.json` file to the repository.

In the production environment, pull the updated repository and run:
1. `composer install --no-dev` to synchronize composer components.
2. `vendor/bin/drush updatedb` to run potential database updates.
3. `vendor/bin/drush cr` to rebuild the cache.

*Never run composer commands other than `composer install --no-dev` in production environment!*

- For detailed instructions on how to update Drupal core, see https://www.drupal.org/docs/8/update/update-core-via-composer.
- For instructions on how to update contributed Drupal modules, see https://www.drupal.org/docs/8/update/update-modules.

## Synchronizing configuration

The site’s configuration is stored in the repository for having it applied when installing the project. Eventually, site maintainers will change configuration in the production environment. In order for plain development installations to be configured properly, it is recommended to sync back configuration changes made in production to the repository from time to time by exporting the configuration and pushing it to the repository. Configuration may be exported by running `vendor/bin/drush cex`, which will overwrite the files in `../config/sync`. Those files would need to be pushed to the repository.

## Retaining code quality

Code should generally adhere to the [Drupal coding standards](https://www.drupal.org/docs/develop/standards/coding-standards).

Yarn scripts are set up to lint ES6 JavaScript files and SCSS files:
* Run `yarn lint:js` to check ES6 JavaScript files using [ESLint](https://eslint.org/).
* Run `yarn lint:scss` to check SCSS files using [stylelint](https://stylelint.io/).

## Docker

This Dupal project is available as Docker container from Docker Hub: https://hub.docker.com/r/codingdavinci/relaunch2018

To execute the pre-compiled Docker container run the following command with the variables set for your environment. An example for Docker Composer can be found in [docker-compose.yml](docker-compose.yml).
```shell
docker run -d -p 8080:80 -P \
  --env "MYSQL_HOSTNAME=cdv.example.com" \
  --env "MYSQL_DATABASE=mycdvdatabase" \
  --env "MYSQL_USER=mycdvuser" \
  --env "MYSQL_PASSWORD=mycdvpassword" \
  --env "MYSQL_PORT=3306" \
  --env "HASH_SALT=myverysecretcdvhashsalt" \
  --env "UPDATE_FREE_ACCESS=FALSE" \
  --env "FILE_PUBLIC_PATH=sites/default/files" \
  --env "TRUSTED_HOST_PATTERNS=\"^localhost\$, ^127.0.0.1\$\"" \
  codingsdavinci/relaunch2018:lastest
```

### Environment variables

Please see [web/sites/default/settings.php](web/sites/default/settings.php) for additional information.

| Environment variable  | Description                                                             | Example                         |
|-----------------------|-------------------------------------------------------------------------|---------------------------------|
| MYSQL_HOSTNAME        | Database connection. Server host name.                                  | `cdv.example.com`               |
| MYSQL_DATABASE        | Database connection. Name of the database.                              | `mycdvdatabase`                 |
| MYSQL_USER            | Database connection. Login name for database.                           | `mycdvuser`                     |
| MYSQL_PASSWORD        | Database connection. Password for database.                             | `mycdvpassword`                 |
| MYSQL_PORT            | Database connection. Server Connection Port.                            | `3306`                          |
| HASH_SALT             | Salt for Drupal's one-time login links, cancel links, form tokens, etc. | `myverysecretcdvhashsalt`       |
| UPDATE_FREE_ACCESS    | Access control for update.php script.                                   | `FALSE`                         |
| FILE_PUBLIC_PATH      | Public file path.                                                       | `sites/default/files`           |
| TRUSTED_HOST_PATTERNS | Trusted host configuration.                                             | `"^localhost\$, ^127.0.0.1\$\"` |

### Build and start Docker container locally

Run in the folder with `Dockerfile`:
```shell
docker build -t cdv .
```

And start Docker container with:
```shell
docker run -d -p 8080:80 -P \
  --env "MYSQL_HOSTNAME=cdv.example.com" \
  --env "MYSQL_DATABASE=mycdvdatabase" \
  --env "MYSQL_USER=mycdvuser" \
  --env "MYSQL_PASSWORD=mycdvpassword" \
  --env "MYSQL_PORT=3306" \
  --env "HASH_SALT=myverysecretcdvhashsalt" \
  --env "UPDATE_FREE_ACCESS=FALSE" \
  --env "FILE_PUBLIC_PATH=sites/default/files" \
  --env "TRUSTED_HOST_PATTERNS=\"^localhost\$, ^127.0.0.1\$\"" \
  cdv
```
