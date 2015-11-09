(function() {
  "use strict";

  let gulp = require('gulp')
    , webpack = require('gulp-webpack')
    , nodemon = require('gulp-nodemon');

  gulp.task('default', function() {
    return gulp.src('public/js/app.js')
      .pipe(webpack({
        watch: true,
        output: {
          filename: 'bundle.js',
        },
        module: {
          loaders: [
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
          ]
        },
      }))
      .pipe(gulp.dest('public/build/'))
      .pipe(nodemon({
        script: 'bin/www'
      }));
  });

})();
