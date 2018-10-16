var gulp = require('gulp');
var sass = require('gulp-sass');
var importOnce = require('node-sass-import-once');

var root = 'web/themes/custom/relaunch2018/';

gulp.task('copy', function() {
  gulp.src(['node_modules/bootstrap/**/*'])
  .pipe(gulp.dest('web/themes/custom/relaunch2018/lib/bootstrap'));

  gulp.src(['node_modules/popper.js/**/*'])
  .pipe(gulp.dest('web/themes/custom/relaunch2018/lib/popper.js'));

  return gulp.src(['node_modules/typeface-barlow/**/*'])
  .pipe(gulp.dest('web/themes/custom/relaunch2018/lib/fonts/barlow'));
});

gulp.task('scss', function() {
  return gulp.src(root + 'scss/*.scss')
  .pipe(sass({
    importer: importOnce
  }))
  .pipe(gulp.dest(root + 'css'))
});

gulp.task('default', gulp.series('copy', 'scss'), function() {});
