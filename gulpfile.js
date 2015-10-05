var gulp = require('gulp'),
	compass = require('gulp-compass'),
	browsersync = require('browser-sync');

gulp.task('compass', function() {
	gulp.src('./sass/*.{sass,scss}')
		.pipe(compass({
			config_file: './config.rb',
			css: 'stylesheets',
			sass: 'sass'
		}))
		.pipe(gulp.dest('./dist'));
});
