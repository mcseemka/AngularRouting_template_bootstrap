'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso');

var bc = './bower_components/';

gulp.task('js', function() {
  gulp.src('builds/development/app/**/*.js')
    .pipe(concat('build.js'))
    .pipe(gulp.dest('builds/dist/app/'))
});


gulp.task('html', function() {
  gulp.src('builds/development/**/*.html')
    .pipe(gulp.dest('builds/dist/'))
});

gulp.task('sass', function () {
  gulp.src('builds/development/sass/**/*')
      .pipe(sass())
      .pipe(concat('style.min.css'))
      .pipe(csso())
      .pipe(gulp.dest('builds/dist/css/'));
});



gulp.task('watch', function() {
  gulp.watch('builds/development/app/**/*.js', ['js']);
  gulp.watch('builds/development/sass/**/*.scss', ['sass']);
  gulp.watch('builds/development/**/*.html', ['html']);
  gulp.watch('builds/development/img/**/*', ['img']);
});

gulp.task('libs', function() {
 gulp.src(bc+'jquery/dist/jquery.js')
     .pipe(gulp.dest('./builds/dist/libs/jquery/'));
 gulp.src(bc+'jquery-ui/jquery-ui.min.js')
      .pipe(gulp.dest('./builds/dist/libs/jquery/'));

  gulp.src(bc+'bootstrap/dist/**/*.*')  
     .pipe(gulp.dest('./builds/dist/libs/bootstrap/'));    

//  gulp.src(bc+'bootstrap-material-design/dist/**/*.*')   bootstrap material design framework
//      .pipe(gulp.dest('./builds/dist/libs/bootstrap-material-design/'));
 // gulp.src(bc+'angular-material/**/*.*')   
     // .pipe(gulp.dest('./builds/dist/libs/angular-material/'));
  gulp.src([bc+'angular/angular.js',
            bc+'angular-animate/angular-animate.js',
             bc+'angular-aria/angular-aria.min.js',
             bc+'angular-messages/angular-messages.min.js',
            bc+'angular-material/angular-material.min.js',
            bc+'angular-cookies/angular-cookies.js',
            bc+'angular-loader/angular-loader.js',
            bc+'angular-resource/angular-resource.js',
            bc+'angular-route/angular-route.js',
            bc+'angular-sanitize/angular-sanitize.js',
            bc+'angular-touch/angular-touch.js',
            bc+'firebase/firebase.js',
            bc+'angularfire/dist/angularfire.js',
          ])
      .pipe(concat('angular.concat.js'))
      .pipe(gulp.dest('./builds/dist/libs/angular/'));
});

gulp.task('webserver', function() {
  gulp.src('builds/dist/')
      .pipe(webserver({
        port :'8090',
        livereload: true,
        open: true
      }));
});




gulp.task('default', [
  'libs',
  'html',
  'js',
  'sass',
  'webserver',
  'watch'
]);
