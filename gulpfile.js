var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var es = require('event-stream');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('lint', function() {
  return gulp.src(['./client/app/*.js', './client/app/**/*.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});;

gulp.task('sass', function() {
  return gulp.src('./client/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./client/styles'));
})

gulp.task('inject', function() {
  return gulp.src('index.html')
  .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
  .pipe(inject(gulp.src(['./client/app/*.js', './client/app/**/*.js'])))
  .pipe(gulp.dest('./'));
});

gulp.task('server', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true
    }))
});

gulp.task('watch', function() {
  gulp.watch(['./client/app/*.js', './client/app/**/*.js', './client/styles/*.scss'], ['lint', 'inject', 'sass']);
});

gulp.task('default', ['lint', 'inject', 'server', 'sass', 'watch']);

function onError(err) {
  gutil.beep();
  gutil.log('error', gutil.colors.cyan(err));
}