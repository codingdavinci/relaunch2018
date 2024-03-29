const { dest, series, src } = require('gulp');
const del = require('del');
const merge = require('merge-stream');
const sass = require('gulp-sass')(require('sass'));
const header = require('gulp-header');
const importOnce = require('node-sass-import-once');
const concat = require('gulp-concat');
const path = require('path');
const replace = require('gulp-replace');
const minifyCSS = require('gulp-clean-css');

function clean() {
  return del([
    'web/themes/custom/relaunch2018/css',
    'web/themes/custom/seven_subtheme/css',
    'web/modules/custom/form_alterations/css'
  ]);
}

function scss() {
  const headerNote = [
    '@charset "UTF-8";',
    ''
  ].join('\n');
  const root = 'web/themes/custom/relaunch2018/';
  const sassOptions = {
    importer: importOnce,
    includePaths: [
      path.resolve(__dirname + '/web/libraries/bootstrap/scss'),
      path.resolve(__dirname + '/web/themes/custom/relaunch2018/scss'),
      path.resolve(__dirname + '/web/themes/custom/relaunch2018/scss/includes')
    ]
  };

   return merge(
    src(root + 'scss/global.scss')
    .pipe(sass(sassOptions))
    .pipe(replace(/@charset [^;]+;/g, ''))
    .pipe(minifyCSS())
    .pipe(header(headerNote))
    .pipe(dest(root + 'css')),

    // Standalone styles.css is supplied to backend CKEditor.
    src(root + 'scss/styles.scss')
    .pipe(sass(sassOptions))
    .pipe(replace(/@charset [^;]+;/g, ''))
    .pipe(minifyCSS())
    .pipe(header(headerNote))
    .pipe(dest(root + 'css')),

    // Admin theme CSS
    src('web/themes/custom/seven_subtheme/scss/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass(sassOptions))
    .pipe(replace(/@charset [^;]+;/g, ''))
    .pipe(minifyCSS())
    .pipe(header(headerNote))
    .pipe(dest('web/themes/custom/seven_subtheme/css')),

    // Custom form CSS
    src('web/modules/custom/form_alterations/scss/*.scss')
    .pipe(sass(sassOptions))
    .pipe(replace(/@charset [^;]+;/g, ''))
    .pipe(minifyCSS())
    .pipe(header(headerNote))
    .pipe(dest('web/modules/custom/form_alterations/css'))
  );
}

exports.default = series(clean, scss);
