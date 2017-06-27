/**
 * Created by JBI on 6/23/2017.
 */
var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback){
    webpack(require('../../webpack.config.js'), function(err, stats){
        if(err){
            console.log('scripts has an error: ' + err.toString());
        }
        console.log('scripts has stats: ' + stats.toString());
        callback();
    });
});