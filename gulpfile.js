var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task("sync", function() {
	browserSync({
		server: {
			baseDir: "./"
		}
	});
});