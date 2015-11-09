(function() {
  "use strict";

  let gulp = require('gulp')
    , webpack = require('gulp-webpack')
    , nodemon = require('gulp-nodemon');

  let webpackConfigInstance = webpack( require('./config/webpack.config.js') );

  gulp.task("webpack", function(callback) {
      webpack(webpackConfigInstance, function(err, stats) {
          if(err) throw new gutil.PluginError("webpack", err);
          gutil.log("[webpack]", stats.toString({
              // output options
          }));
          callback();
      });
  });

  gulp.task('default', function() {
    nodemon({ script: 'bin/www'
          , ext: 'html js'
          , tasks: ['webpack'] })
    .on('restart', function () {
      console.log('restarted!')
    });
  });

})();
