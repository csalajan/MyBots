var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build:achilles', function() {
    gulp.src([
        'src/Robot.js',
        'src/Bots/Achilles.js'
        ])
        .pipe(concat('Achilles.js'))
        .pipe(gulp.dest('dist/Bots/'));

});

gulp.task('build', function() {

});