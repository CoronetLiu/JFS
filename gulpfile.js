/*
* @Author: Marte
* @Date:   2017-09-20 10:21:55
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-24 13:56:48
*/

// 'use strict';
let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass-china");

// gulp.task("hello",()=>{
//     console.log("This is my first task");
// });
gulp.task("index",()=>{
    // gulp.src();  =>寻找路径;
    // gulp.pipe(); =>连缀方法;
    // gulp.dest(); =>转存方法;

    return gulp.src("promotion.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());
});

gulp.task("watch",()=>{
    gulp.watch(["promotion.html","sass/*.scss"],["index"]);
    gulp.watch("sass/*.scss",["sass"]);
});
gulp.task("server",()=>{
    connect.server({
        root:"dist",
        port:7210,
        livereload:true
    });
});
gulp.task("sass",()=>{
    return gulp.src("sass/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("dist/css"));
})
gulp.task("default",["server","watch"])