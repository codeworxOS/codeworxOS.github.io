//script paths
var jsFiles = [
    'Template/vendor/jquery/jquery.min.js',
    'Template/vendor/jquery-migrate/jquery-migrate.min.js',
    'Template/vendor/popper.js/popper.min.js',
    'Template/vendor/bootstrap/bootstrap.min.js',
    'Template/vendor/gmaps/gmaps.min.js',
    'Template/vendor/appear.js',
    'Template/vendor/slick-carousel/slick/slick.js',
    'Template/vendor/cubeportfolio-full/cubeportfolio/js/jquery.cubeportfolio.min.js',
    'Template/js/hs.core.js',
    'Template/js/components/hs.header.js',
    'Template/js/helpers/hs.hamburgers.js',
    'Template/js/components/hs.scroll-nav.js',
    'Template/js/helpers/hs.height-calc.js',
    'Template/js/components/gmap/hs.map.js',
    'Template/js/components/hs.go-to.js',
    'Template/js/components/hs.carousel.js',
    'Template/js/components/hs.cubeportfolio.js'
]

var styleFiles = [
    'Template/vendor/bootstrap/bootstrap.css',
    'Template/vendor/icon-hs/style.css',
    'Template/vendor/icon-line/css/simple-line-icons.css',
    'Template/vendor/icon-line-pro/style.css',
    'Template/vendor/hamburgers/hamburgers.css',
    'Template/vendor/animate.css',
    'Template/vendor/cubeportfolio-full/cubeportfolio/css/cubeportfolio.css',
    'Template/vendor/slick-carousel/slick/slick.css',
    'Template/css/styles.op-accounting.css',
    'Template/css/unify-core.css',
    'Template/css/unify-components.css',
    'Template/css/unify-globals.css',
    'css/styles.main_ke.css',
    'css/styles.main.custom.css'
]

var jsDest = 'js';
var cssDest = 'css';

var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var purgecss = require('gulp-purgecss')



gulp.task('watch', function () {
    return gulp.watch('css/styles.main*.css', gulp.series('bundle:styles'));
});


gulp.task('bundle:scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('bundle:styles', function () {
    return gulp.src(styleFiles)
        .pipe(concatCss('styles.css', {commonBase: 'css'}))
        .pipe(gulp.dest(cssDest));
        // // .pipe(rename('styles.min.css'))
        // // .pipe(minifyCSS())
        // // .pipe(gulp.dest(cssDest));
});

gulp.task('bundle:styles:purge', () => {
    return gulp.src('css/styles.css')
        .pipe(purgecss({
            content: ['**/*.html', '!Template/**/*'],
            safelist: {
                standard: [
                    'u-btn-primary',
                    'u-btn-red',
                    'u-btn-lightred',
                    'u-btn-darkred',
                    'u-btn-blue',
                    'u-btn-indigo',
                    'u-btn-purple',
                    'u-btn-darkpurple',	
                    'u-btn-pink',
                    'u-btn-orange',
                    'u-btn-deeporange',	
                    'u-btn-aqua',
                    'u-btn-yellow',
                    'u-btn-cyan',
                    'u-btn-teal',
                    'u-btn-brown',
                    'u-btn-bluegray',
                    'u-btn-darkgray',
                    'u-btn-black'
                ],
            //     ['slick-track',
            // 'slick-initialized',
            // 'slick-slider',
            // 'slick-slide',
            // 'slick-cloned',
            // 'slick-dotted', 
            // 'slick-active', 
            // 'slick-current', 
            // 'slick-list', 
            // 'draggable']
                deep: [
                    /^slick-/,
                    /^cbp-/,
                ]
            }
        }))
        .pipe(rename('styles.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'))
})