module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    'dist/styles.min.css': ['styles.css']
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/script.min.js': ['script.js']
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register tasks
    grunt.registerTask('default', ['cssmin', 'uglify']);
};
