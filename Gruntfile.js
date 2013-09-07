module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            app: 'build/'
        },
        copy: {
            js: {
                dest: 'build/',
                src: 'js/**/*'
            },
            html: {
                expand: true,
                dest: 'build/',
                src: ['*.html']
            }
        },
        takana: {
            dist: {
                files: {
                    'build/css/style.css': 'scss/style.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-takana');

    grunt.registerTask('build', ['clean', 'copy', 'takana']);
    grunt.registerTask('default', 'build');
};
