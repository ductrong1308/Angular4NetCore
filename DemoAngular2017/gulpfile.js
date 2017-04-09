/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglyfly'),
    _ = require('lodash');

/**************************************
            SOURCE FILES
***************************************/
var vendorsCss = [
    './bower_components/bootstrap/dist/css/bootstrap.css'
];

var vendorsJs = [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap/dist/js/bootstrap.js',
    './node_modules/core-js/client/shim.min.js',
    './node_modules/zone.js/dist/zone.js',
    './node_modules/systemjs/dist/system.src.js',

    './node_modules/@angular/core/bundles/core.umd.js',
    './node_modules/@angular/common/bundles/common.umd.js',
    './node_modules/@angular/compiler/bundles/compiler.umd.js',
    './node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    './node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    './node_modules/@angular/http/bundles/http.umd.js',
    './node_modules/@angular/router/bundles/router.umd.js',
    './node_modules/@angular/forms/bundles/forms.umd.js',
    './node_modules/rxjs/bundles/Rx.min.js',
    './node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
];

/**************************************
            TASK COPY
***************************************/
gulp.task('copy:js', function () {
    _.forEach(vendorsJs, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/js/vendors'));
    });
});

gulp.task('copy:css', function () {
    _.forEach(vendorsCss, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/css/vendors'));
    });
});

/**************************************
            TASK MINIFY
***************************************/
//gulp.task('min:js', function () {
//    return gulp.src(paths.jsSource)
//        .pipe(concat(paths.jsDest + '/site.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('.'));
//});

//gulp.task('min:css', function () {
//    return gulp.src(paths.cssSource)
//        .pipe(concat(paths.cssDest + '/site.min.css'))
//        .pipe(cssmin())
//        .pipe(gulp.dest('.'));
//});

gulp.task('copy', ['copy:js', 'copy:css']);