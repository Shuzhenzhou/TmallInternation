var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");
var concat = require("gulp-concat");//合并文件
var uglify = require("gulp-uglify");//压缩文件
var rename = require("gulp-rename");//重命名
var babel = require("gulp-babel");//将ES6转换成ES5

gulp.task("copyHtml",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});


gulp.task("sever",function(){
	connect.server({root:"dist",livereload:true })
});
gulp.task("copyFont",function(){
	gulp.src("font/**")
	.pipe(gulp.dest("dist/font"))
});

gulp.task("copyImgs",function(){
	gulp.src("img/**")
	.pipe(gulp.dest("dist/img"))
	.pipe(connect.reload());
});

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"))
});

gulp.task("babel",function(){
	gulp.src("js/*.js")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
});

gulp.task("watch",function(){
	gulp.watch(["*.html","img/**","sass/*.scss","js/*.js","font/**"],["copyHtml","copyImgs","sass","babel","copyFont"]);
	
});



gulp.task("default",["sever","watch"]);
