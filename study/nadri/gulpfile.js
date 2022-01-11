const gulp = require('gulp');
const {series, parallel, pipe, src, dest} = require('gulp');
const extender = require('gulp-html-extend');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
// const del = require('del');
// const image = require('gulp-image')
const sourcemaps = require('gulp-sourcemaps');


// function clean() {
//     return gulp.src('.')
//         .pipe(del('output/*'))
//         .pipe(gulp.dest('output/'));
// }

function extend() {
    return gulp.src('./src/html/*.html')
        .pipe(extender({annotations: true, verbose: true, root: true}))
        .pipe(gulp.dest('./output/'))
};

function buildStyles() {
    return gulp.src('./src/scss/**/*.scss')
        // .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        // .pipe(sourcemaps.write('./output/maps'))
        .pipe(gulp.dest('./output/css'));
};

// function img () {
//     return gulp.src('./src/img/*')
//         .pipe(image())
//         .pipe(gulp.dest('./output/img'));
// }


exports.buildStyles = buildStyles;
exports.extend = extend;


exports.watch = function () {
    gulp.watch('./src/html/*.html', ['extend']);
    gulp.watch('./src/sass/*.scss', ['sass']);
};

exports.build = series(extend, buildStyles);

// function defaultTask(cb) {
//     cb();
// }
//
// // The `clean` function is not exported so it can be considered a private task.
// // It can still be used within the `series()` composition.
// function clean(cb) {
//     // body omitted
//     cb();
// }
//
// // The `build` function is exported so it is public and can be run with the `gulp` command.
// // It can also be used within the `series()` composition.
// // function build(cb) {
// //     // body omitted
// //     cb();
// // }
//
//
// function cssTranspile(cb) {
//     // body omitted
//     cb();
// }
//
// function cssMinify(cb) {
//     // body omitted
//     cb();
// }
//
// function jsTranspile(cb) {
//     // body omitted
//     cb();
// }
//
// function jsBundle(cb) {
//     // body omitted
//     cb();
// }
//
// function jsMinify(cb) {
//     // body omitted
//     cb();
// }
//
// function publish(cb) {
//     // body omitted
//     cb();
// }


// exports.default = function() {
//     return src('output/*.js')
//         .pipe(watch('src/*.css', {queue: false}))
//         .pipe(src('src/*.js'))
//         .pipe(babel())
//         .pipe(src('vendor/*.js'))
//         .pipe(dest('output/'))
//         .pipe(uglify())
//         .pipe(rename({ extname: '.min.js' }))
//         .pipe(dest('output/'));
// };
//
//
// exports.build = series(
//     clean,
//     parallel(
//         cssTranspile,
//         series(jsTranspile, jsBundle)
//     ),
//     parallel(cssMinify, jsMinify),
//     publish
// )