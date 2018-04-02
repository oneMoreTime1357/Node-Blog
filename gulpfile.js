var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

// 创建一个sass的任务
gulp.task('sass', function () {
  return gulp.src('./public/styles/scss/*.scss')
          .pipe(sass({outputStyle: 'compressed'}))
          .pipe(autoprefixer())
          .pipe(gulp.dest('./public/styles/css'))
})

// 依赖的task 必须在sass，task执行完了之后执行
gulp.task('default', ['sass'], function () {
  gulp.watch('./public/styles/scss/_partial/*.scss', ['sass'])
  gulp.watch('./public/styles/scss/*.scss', ['sass'])
  // 用来监听那些文件变化了， 在执行一个task的时候 
})