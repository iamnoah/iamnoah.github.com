/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      test: {
        options:  {
          keepalive: true,
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['connect:test']);
};
