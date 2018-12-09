var gulp = require('gulp');
var del = require('del');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var importOnce = require('node-sass-import-once');
var concat = require('gulp-concat');
var path = require('path');

gulp.task('clean', function() {
  return del([
    'web/themes/custom/relaunch2018/css',
    'web/themes/custom/relaunch2018/lib/bootstrap',
    'web/themes/custom/relaunch2018/lib/hammerjs',
    'web/themes/custom/relaunch2018/lib/jquery.easing',
    'web/themes/custom/relaunch2018/lib/popper.js',
    'web/themes/custom/relaunch2018/lib/fonts/barlow',
    'web/themes/custom/seven_subtheme/css',
    'web/modules/custom/form_alterations/css'
  ]);
});

gulp.task('scss', function() {
  var root = 'web/themes/custom/relaunch2018/';
  var sassOptions = {
    importer: importOnce,
    includePaths: [
      path.resolve(__dirname + '/web/libraries/bootstrap/scss')
    ]
  };

  return merge(

    // Frontend theme CSS
    gulp.src(root + 'scss/*.scss')
    .pipe(concat('global.scss'))
    .pipe(sass(sassOptions))
    .pipe(gulp.dest(root + 'css')),

    gulp.src(root + 'scss/styles.scss')
    .pipe(sass(sassOptions))
    .pipe(gulp.dest(root + 'css')),

    // Admin theme CSS
    gulp.src('web/themes/custom/seven_subtheme/scss/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass(sassOptions))
    .pipe(gulp.dest('web/themes/custom/seven_subtheme/css')),

    // Custom form CSS
    gulp.src('web/modules/custom/form_alterations/scss/*.scss')
    .pipe(sass(sassOptions))
    .pipe(gulp.dest('web/modules/custom/form_alterations/css'))
  );
});

gulp.task('default', gulp.series('clean', 'scss'), function() {});
