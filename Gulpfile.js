var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['clean', 'concat/uglify']);

gulp.task('clean', function () {
    gulp.src('dist/', {read: false})
        .pipe(clean())
});

gulp.task('concat/uglify', function () {
    gulp.src('src/js/*.js')
        .pipe(concat('passwordQuality.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/'));
});
