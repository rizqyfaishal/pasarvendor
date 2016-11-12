var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs');

gulp.task('vet',function() {
    return gulp
      .src([
          './assets/javascripts/**/*.js'
      ])
      .pipe(jscs())
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish',{ verbose: true }));
});
