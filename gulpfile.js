const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const changed = require("gulp-changed");
// const browserSync = require('browser-sync').create();



//compile scss into css
function style() {
    return gulp.src('src/Assets/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(changed('src/Assets/css'))
    .pipe(gulp.dest('src/Assets/css'))
    // .pipe(browserSync.stream());
}


function watch() { 
    gulp.watch('src/Assets/scss/**/*.scss', style) 
   
}

exports.style = style;
exports.default = watch;
