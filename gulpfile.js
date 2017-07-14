var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task("sync", function() {
	browserSync({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task("css", function() {
	return gulp.src("./dest/css/*.css")
		.pipe(browserSync.reload({stream:true}))
});

gulp.task("watch", function() {
	gulp.watch("./dest/css/*.css", ["css"]);
});

gulp.task("arrancar", ["sync", "watch"]);

