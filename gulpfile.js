var gulp = require('gulp');
var sass = require('gulp-sass');
var importOnce = require('node-sass-import-once');

var root = 'web/themes/custom/relaunch2018/';

gulp.task('sass', function() {
  return gulp.src(root + 'scss/*.scss')
  .pipe(sass({
    importer: importOnce
  }))
  .pipe(gulp.dest(root + 'css'))
});

gulp.task('default', ['sass']);
