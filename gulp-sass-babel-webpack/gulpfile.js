const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const webpackStream = require('webpack-stream');
const webpackConfig = require("./webpack.config.js");

function htmlTask(cb){
    gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
    cb();
}

function imageminTask(cb){
    gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
    cb();
}

function sassTask(cb){
    gulp.src('./src/scss/main.scss')
    .pipe(rename('main.min.css'))
    .pipe(sourcemaps.init())    
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
    cb();
}
function gulpWebpackTask(cb){
    gulp.src('./src/js/index.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('./dist/'));
    cb();
}

function browsersyncServe(cb){
    browserSync.init({
      server: {
        baseDir: './dist/'
      }
    });
    cb();
}
  
function browsersyncReload(cb){
    browserSync.reload();
    cb();
}

// Watch Task
function watchTask(){
    gulp.watch('./src/*.html',gulp.series(htmlTask,browsersyncReload));
    gulp.watch('./src/scss/**/*.scss', gulp.series(sassTask, browsersyncReload));
    gulp.watch('./src/js/**/*.js', gulp.series(gulpWebpackTask, browsersyncReload));
    gulp.watch('./src/images/', gulp.series(imageminTask, browsersyncReload));
}

// Default Gulp task
exports.default = gulp.series(    
    htmlTask,
    imageminTask,
    sassTask,
    gulpWebpackTask,  
    browsersyncServe,
    watchTask
);