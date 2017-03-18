'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const babel  = require('gulp-babel');
const del = require('del');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

gulp.task('clean', () => {
    return del('public');
});

gulp.task('sass', () => {
    return gulp.src('frontend/css/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/css'));
});

gulp.task('cssmin', () => {
    return gulp.src('frontend/css/*.css')
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', () => {
    return gulp.src('frontend/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('imagemin', () => {
    return gulp.src('frontend/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'));
});

gulp.task('html', () => {
    return gulp.src('frontend/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('build', gulp.series('clean', 'sass', 'cssmin', 'js', 'imagemin', 'html'));