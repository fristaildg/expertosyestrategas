var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require('browser-sync');

gulp.task("sync", function() {
	browserSync({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task("css", function() {
	return gulp.src("./src/css/*.css")
		.pipe(autoprefixer())
		.pipe(gulp.dest("dest/css"))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task("js", function() {
	gulp.src([
		"node_modules/slick-carousel/node_modules/jquery/dist/jquery.js",
		"node_modules/slick-carousel/slick/slick.js",
		"node_modules/remodal/dist/remodal.min.js",
		"src/js/app.js"	
	])

	.pipe(concat("app.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("dest/js"))
	.pipe(browserSync.reload({stream:true}))
});

gulp.task("html", function() {
	return gulp.src("./*.html")
		.pipe(browserSync.reload({stream:true}))
});

gulp.task("watch", function() {
	gulp.watch("./src/css/*.css", ["css"]);
	gulp.watch("./*.html", ["html"]);
	gulp.watch("./src/js/app.js", ["js"]);
});

gulp.task("arrancar", ["sync", "watch"]);

gulp.task("default", ["js", "css"]);

