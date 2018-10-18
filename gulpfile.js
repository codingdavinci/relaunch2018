var gulp = require('gulp');
var del = require('del');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var importOnce = require('node-sass-import-once');

var root = 'web/themes/custom/relaunch2018/';

gulp.task('clean', function() {
  return del([
    'web/themes/custom/relaunch2018/lib/bootstrap',
    'web/themes/custom/relaunch2018/lib/hammerjs',
    'web/themes/custom/relaunch2018/lib/jquery.easing',
    'web/themes/custom/relaunch2018/lib/popper.js',
    'web/themes/custom/relaunch2018/lib/fonts/barlow'
  ]);
});

gulp.task('copy', function() {
  return merge(
    gulp.src(['node_modules/bootstrap/**/*'])
    .pipe(gulp.dest('web/themes/custom/relaunch2018/lib/bootstrap')),

    gulp.src(['node_modules/hammerjs/**/*'])
    .pipe(gulp.dest('web/themes/custom/relaunch2018/lib/hammerjs')),

    gulp.src(['node_modules/jquery.easing/**/*'])
    .pipe(gulp.dest('web/themes/custom/relaunch2018/lib/jquery.easing')),

    gulp.src(['node_modules/popper.js/**/*'])
    .pipe(gulp.dest('web/themes/custom/relaunch2018/lib/popper.js')),

    gulp.src(['node_modules/typeface-barlow/**/*'])
    .pipe(gulp.dest('web/themes/custom/relaunch2018/lib/fonts/barlow'))
  );
});

gulp.task('scss', function() {
  return gulp.src(root + 'scss/*.scss')
  .pipe(sass({
    importer: importOnce
  }))
  .pipe(gulp.dest(root + 'css'))
});

gulp.task('default', gulp.series('clean', 'copy', 'scss'), function() {});
