var _ = require('lodash');

var browserifyConfig = {
  src: ['app/static/main.js'],
  dest: 'app/static/app.js',
  options: {
    browserifyOptions: {
      extensions: ['.jsx'],
      transform: [
        [ 'reactify', {'es6': true} ]
      ]
    }
  }
}

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        '**/*.js',
        '!**/*.min.js',
        '!node_modules/**/*',
        '!augur/static/app.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    browserify: {
      build: browserifyConfig,
      watch: _.merge({
        options: {
          watch: true,
          keepAlive: true,
          browserifyOptions: {
            debug: true
          }
        }
      }, browserifyConfig)
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('watchify', ['browserify:watch']);
};
