module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'concat', 'browserify', 'uglify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: 'dist/passwordQuality.js',
                dest: 'dist/passwordQuality.js'
            }
        },
        clean: {
            dev: ['dist']
        },
        concat: {
            js: {
                src: 'src/js/*.js',
                dest: 'dist/passwordQuality.js'
            }
        },
        concat_sourcemap: {
            options: {
                sourcesContent: true
            },
            target: {
                files: {
                    'dist/passwordQuality.js': 'src/js/*.js'
                }
            }
        },
        uglify: {
            dist: {
                src: 'dist/passwordQuality.js',
                dest: 'dist/passwordQuality.min.js'
            }
        }
    });
};
