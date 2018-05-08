//script paths
var jsFiles = [
    'Template/vendor/jquery/jquery.min.js',
    'Template/vendor/jquery-migrate/jquery-migrate.min.js',
    'Template/vendor/popper.min.js',
    'Template/vendor/bootstrap/bootstrap.min.js',
    'Template/vendor/gmaps/gmaps.min.js',
    'Template/vendor/appear.js',
    'Template/vendor/slick-carousel/slick/slick.js',
    'Template/js/hs.core.js',
    'Template/js/components/hs.header.js',
    'Template/js/helpers/hs.hamburgers.js',
    'Template/js/components/hs.scroll-nav.js',
    'Template/js/helpers/hs.height-calc.js',
    'Template/js/components/gmap/hs.map.js',
    'Template/js/components/hs.go-to.js',
    'Template/js/components/hs.carousel.js'
]

var jsDest = 'js';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('bundle:scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});