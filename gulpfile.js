var gulp = require('gulp');
var del = require('del');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var importOnce = require('node-sass-import-once');
var concat = require('gulp-concat');

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
  var root = 'web/themes/custom/relaunch2018/';

  return merge(

    // Frontend theme CSS
    gulp.src(root + 'scss/*.scss')
    .pipe(concat('global.scss'))
    .pipe(sass({
      importer: importOnce
    }))
    .pipe(gulp.dest(root + 'css')),

    gulp.src(root + 'scss/styles.scss')
    .pipe(sass({
      importer: importOnce
    }))
    .pipe(gulp.dest(root + 'css')),

    // Admin theme CSS
    gulp.src('web/themes/custom/seven_subtheme/scss/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass({
      importer: importOnce
    }))
    .pipe(gulp.dest('web/themes/custom/seven_subtheme/css')),

    // Custom form CSS
    gulp.src('web/modules/custom/form_alterations/scss/*.scss')
    .pipe(sass({
      importer: importOnce
    }))
    .pipe(gulp.dest('web/modules/custom/form_alterations/css'))
  );
});

gulp.task('default', gulp.series('clean', 'copy', 'scss'), function() {});
