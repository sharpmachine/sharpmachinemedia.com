'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

        // let us know if our JS is sound
        jshint: {
          options: {
            "bitwise": true,
            "browser": true,
            "curly": true,
            "eqeqeq": true,
            "eqnull": true,
            "es5": true,
            "esnext": true,
            "immed": true,
            "jquery": true,
            "latedef": true,
            "newcap": true,
            "noarg": true,
            "node": true,
            "strict": false,
            "trailing": true,
            "undef": true,
            "globals": {
              "jQuery": true,
              "alert": true
            }
          },
          all: [
          'Gruntfile.js',
          'themes/bootstrap/js/*.js',
          'themes/bootstrap/js/vendor/*.js'
          ]
        },

        // concatenation and minification all in one
        uglify: {
          dist: {
            files: {
              'themes/smm/js/plugins.min.js': [
              'themes/smm/js/transition.js',
              'themes/smm/js/alert.js',
              'themes/smm/js/button.js',
              'themes/smm/js/carousel.js',
              'themes/smm/js/collapse.js',
              'themes/smm/js/dropdown.js',
              'themes/smm/js/modal.js',
              'themes/smm/js/tooltip.js',
              'themes/smm/js/popover.js',
              'themes/smm/js/scrollspy.js',
              'themes/smm/js/tab.js',
              'themes/smm/js/affix.js',
              'themes/smm/js/vendor/*.js',
              'bower-components/jquery.scrollTo/jquery.scrollTo.js'
              ],
              'themes/smm/js/scripts.min.js': [
              'themes/smm/js/scripts.js'
              ]
            }
          }
        },

        less: {
          development: {
            options: {
              paths: ["less"],
              yuicompress: true,
              cleancss: true
            },
            files: {
              "themes/smm/css/bootstrap.css": "themes/smm/less/bootstrap.less"
            }
          }
        },

        // watch our project for changes
        watch: {
          // grunt: {
          //   files: ['Gruntfile.js']
          // },
          less: {
            files: ["themes/smm/less/*"],
            tasks: ["less"],
          },
          // css: {
          //   files: ['themes/smm/css/bootstrap.css']
          // },
          js: {
            files: [
            'themes/smm/js/scripts.js',
            'themes/smm/js/vendor/*.js'
            ],
            tasks: ['uglify']
          },
          livereload: {
            files: [
            'themes/smm/css/*.css',
            'themes/smm/js/scripts.min.js',
            'themes/smm/js/vendor/*.js',
            'themes/smm/index.html',
            'content/*.md',
            'content/*/*.md',
            'content/*/*/*.md',
            'content/*.html'
            ],
            options: {
              livereload: true
            }
          }
        },

        imagemin: {
          png: {
            options: {
              optimizationLevel: 7
            },
            files: [
            {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'themes/smm/img/project-assets/was/',
                  src: ['**/*.png'],
                  // Could also match cwd line above. i.e. themes/bootstrap/img/
                  dest: 'themes/smm/img/project-assets/was/',
                  ext: '.png'
                }
                ]
              },
              jpg: {
                options: {
                  progressive: true
                },
                files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'themes/smm/img/project-assets/was/',
                  src: ['**/*.jpg'],
                  // Could also match cwd. i.e. themes/bootstrap/img/
                  dest: 'themes/smm/img/project-assets/was/',
                  ext: '.jpg'
                }
                ]
              }
            }
          });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // register task
    grunt.registerTask('imageopt', ['imagemin']); // execute on both .png and .jpg
    grunt.registerTask('imagepng', ['imagemin:png']); // only .png files
    grunt.registerTask('imagejpg', ['imagemin:jpg']);// only .jpg files
    grunt.registerTask('default', [
        // 'jshint',
        'uglify',
        'watch'
        ]);

  };