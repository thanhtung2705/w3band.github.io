var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var livereload = require('gulp-livereload')
var minify     = require('gulp-minify')
var cleanCSS  = require('gulp-clean-css')

gulp.task('sass', function() {
    return gulp.src('../scss/**/*.scss') // Gets all files ending with .scss in app/scss
      .pipe(sass())
      .pipe(gulp.dest('../css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});


// Minify Css
function minifyCSS() {
  return (
    gulp
      .src("../css/*.css")
      .pipe(cleanCSS())
      .pipe(gulp.dest("../css"))
  );
}

gulp.task("minify-css", minifyCSS);

gulp.task("watch", () => {
  gulp.watch("../css/*.css", minifyCSS);
});


// Minify JS
gulp.task("min-js", function() {
  return gulp.src("../js/*.js")
      .pipe(minify({
          ext: {
              min: ".min.js"
          },
          ignoreFiles: ["-min.js"]
      }))
      .pipe(gulp.dest("../js"))
});

gulp.task("watch", function(){
gulp.watch("../js/*.js", ["min-js"]); 
// Other watchers
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: "../",
      },
    });
});

gulp.task('watch', function() {
    gulp.watch("../scss/**/*.scss", gulp.series('sass'));
})


gulp.task('default', gulp.series('sass', 'watch'));
// gulp.task('default', gulp.series('minify-css', 'watch'));
// gulp.task('default', gulp.series('min-js', 'watch'));