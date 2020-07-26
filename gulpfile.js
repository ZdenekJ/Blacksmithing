'use strict';

// Základní nastavení
const scssDir = './scss/';			// Zdrojový adresář s SCSS soubory
const cssDir = './public/css/';				// Adresář pro výstupní CSS

// Nastavení adresářů pro watcher
const mainDir = scssDir;

// Potřebné moduly
const gulp = require('gulp');									// Vlastní GULP
const sass = require('gulp-dart-sass');						// Zpracování SCSS > CSS
const sourcemaps = require('gulp-sourcemaps');				// Sourcemaps
const cleanCSS = require('gulp-clean-css');					// Minifikace CSS
const autoprefixer = require('gulp-autoprefixer');			// automatické doplnění / odstranění prohlížečových prefixů vlastností podle definice v package.json sekce browserslist

function scssToCssMain()
{
  let src = scssDir + 'main.scss';
  let dest = cssDir;
  
  return scssToCss(src,dest);
}


function scssToCss(srcFile, destDir)
{           
  return gulp.src(srcFile)
  .pipe(sourcemaps.init({largeFile: true}))
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: 'scss/'}))
  .pipe(gulp.dest(destDir));
}

  
// exports.default = gulp.parallel(scssToCssMain, scssToCssComponents);

gulp.task('watch', function() {
    gulp.watch([mainDir + '**'], gulp.series(scssToCssMain)); // Hlídá 'mainDir' a nehlídá ty, které začínají '!'. Může se tak vypnout hlídání adresářů, které mají vlastní hlídače.
});