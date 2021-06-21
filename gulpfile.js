

const gulp = require("gulp"),
{ src, dest, series, parallel } = require("gulp");
sass = require("gulp-sass"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssnano = require("cssnano"),
sourcemaps = require("gulp-sourcemaps"),
webpack = require("webpack-stream"),
webpackConfig = require("./webpack.config.js");

var source = './app';
var output = './dist';
var assets = '/assets';

var sourcePaths = {
    html: source + '/*.html',
    sass: source + assets + '/css/**/*.scss',
    js: source + assets + '/js/**/*.js', 
    imgs: source + assets + '/media/imgs/*',
    fonts:  source + assets + '/media/fonts/*/**'
}

var outputPaths = {
    html: output,
    css: output + assets + '/css',
    js: output + assets + '/js',
    imgs: output + assets + '/media/imgs',
    fonts: output + assets + '/media/fonts'
}

// CSS Task
gulp.task('cssTask', function () {
    return src(sourcePaths.sass)
    .pipe(sourcemaps.init()) // Initialize sourcemaps - Access CSS with devtools
    .pipe(sass().on("error", sass.logError)) // Log SASS errors
    .pipe(postcss([autoprefixer(), cssnano()])) // Vendor prefixes and CSS minification
    .pipe(sourcemaps.write(".")) // Create sourcemaps - Access CSS with devtools 
    .pipe(dest(outputPaths.css));
});

// JS Task
gulp.task('jsTask', function() {
    return src(sourcePaths.js)
    .pipe( webpack(webpackConfig, null, function (err, stats) {
        if (err) { console.log(err); }
    })) // .on('error', function (err) { if(err){ console.log(err.message);} })
    .pipe(dest(outputPaths.js));
});

// HTML Task
gulp.task('htmlTask', function() {
    return src(sourcePaths.html)
    .pipe(dest(outputPaths.html));
});

// IMGS Task
gulp.task('copyImgs', function() {
    return src(sourcePaths.imgs)
    .pipe(dest(outputPaths.imgs));
});

// Fonts Task
gulp.task('copyFonts', function() {
    return src(sourcePaths.fonts)
    .pipe(dest(outputPaths.fonts));
});

// Watch Task 
gulp.task('watch', function () {
    gulp.watch(sourcePaths.html, series('htmlTask'));
    gulp.watch(sourcePaths.sass, series('cssTask'));
    gulp.watch(sourcePaths.js, series('jsTask'));
});

