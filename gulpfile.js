var gulp = require('gulp');
	gutil = require('gulp-util');

gulp.task('log',done => {
	gutil.log("workflows are awesome");
	done();
});