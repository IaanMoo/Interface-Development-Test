module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        // Configure tasks
        cssmin: {
            target: {
                files: {
                    'dist/style.min.css': ['src/style.css']
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/script.min.js': ['src/script.js']
                }
            }
        },
        htmlmin: {
            options: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              minifyJS: true,
              minifyCSS: true
            },
            files: {
              'dist/index.html': 'src/index.html'
            }
          }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Register tasks
    grunt.registerTask('default', ['cssmin', 'uglify', 'htmlmin']);
};
