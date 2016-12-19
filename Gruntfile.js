module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: 'index.js',
                dest: 'js/passwordQuality.js'
            }
        }
    });
};
