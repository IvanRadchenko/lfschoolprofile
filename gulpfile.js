var gulp = require("gulp"),
    connect = require("gulp-connect"),
    liverealod = require("gulp-livereload"),
    uglify = require("gulp-uglify"),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require("gulp-if"),
    useref = require("gulp-useref"),
    autoprefixer = require('gulp-autoprefixer'),
   // wiredep = require('wiredep').stream,
    pug = require('gulp-pug'),
    sass = require("gulp-sass");

//Connect to development server

  gulp.task('connectDev', function () {
    gulp.src('./prod/forms.html')
  connect.server({
    root: 'prod',
    livereload: true
  });
});

//Livereload of the Pug compile
gulp.task('pug', function () {
  return gulp.src('./dev/forms.pug')
    .pipe(pug())
    /*.pipe(wiredep({
        optional: 'configuration',
        goes: 'here'
      }))*/
    .pipe(gulp.dest('./prod'))
});

gulp.task('html', function () {
  return gulp.src('./prod/forms.html')
    .pipe(connect.reload());
});

//Minify CSS
  gulp.task('sass', function() {
      return gulp.src('./dev/**/*.scss')
          .pipe(sourcemaps.init())
          .pipe(sass().on('error', sass.logError))
          .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //  .pipe(cleanCSS())
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('./prod/'))
      });

  gulp.task('script', function () {
    return gulp.src('./dev/js/*.js')
      .pipe(gulp.dest('./prod/js/'))
  });

//Gulp watchers
gulp.task('watch', function () {
  gulp.watch(['./dev/*.pug'], ['pug']);
  gulp.watch(['./dev/**/*.scss'], ['sass']);
  gulp.watch(['./prod/*.html'],['html']);
  gulp.watch(['./prod/assets/styles.css'],['html']);
  gulp.watch(['./dev/js/*.js'],['script']);
  gulp.watch(['./prod/js/*.js'],['html']);
});
 
gulp.task('default', ['connectDev', 'watch']);