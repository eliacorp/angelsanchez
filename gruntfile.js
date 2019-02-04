module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // css: {
            //     src: [
            //         'bower_components/video.js/dist/video-js/video-js.css',
            //         'app.css',
            //         'bower_components/select2-4.0.0/dist/css/select2.css',
            //         'bower_components/angular-ui-select/dist/select.css'
            //     ],
            //     dest: 'combine.css'
            // },
            js: {
                src: [
             'bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.js',
             'bower_components/jquery/dist/jquery.js',
                          'bower_components/angular/angular.js',
                          'bower_components/angular-route/angular-route.js',
                          'bower_components/angular-resource/angular-resource.js',
                          'bower_components/angular-sanitize/angular-sanitize.js',
                          'bower_components/angular-touch/angular-touch.js',
                          'bower_components/angular-animate/angular-animate.js',
                          'bower_components/video.js/dist/video-js/video.dev.js',
                          'bower_components/waypoints/lib/jquery.waypoints.js',
                          'bower_components/jquery/color-animation.js',
                          'bower_components/select2-4.0.0/dist/js/select2.js',
                          'bower_components/ui-utils.js',
                          'bower_components/angular-ui-select/dist/select.js',
                          'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
                          'routes.js',
                          'services.js',
                          'tipekit.js',
                          'about/about.js',
                          'collections/season.js',
                          'components/header/header.js',
                          'components/logo/logo.js',
                          'components/nav/nav.js',
                          'components/scroller.js',
                          'contact/contact.js',
                          'home/home.js',
                          'journal/journal.js',
                          'legal/legal.js',
                          'stores/stores.js',
                          'bower_components/angular-mailchimp/angular-mailchimp.js'
                ],
                dest: 'app.js'
            }
        },
        // cssmin: {
        //     css: {
        //         src: 'combined.css',
        //         dest: 'app.min.css'
        //     }
        // },
        uglify: {
          options: {
            report: 'gzip',
            mangle: false,
            compress: true
          },
            js: {
                files: {
                    'app.min.js': ['app.js']
                }
            }
        },
        watch: {
           files: [
             'bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.js',
             'bower_components/jquery/dist/jquery.js',
                          'bower_components/angular/angular.js',
                          'bower_components/angular-route/angular-route.js',
                          'bower_components/angular-resource/angular-resource.js',
                           'bower_components/angular-sanitize/angular-sanitize.js',

                          'bower_components/angular-touch/angular-touch.js',
                          'bower_components/jquery.mobile-1.4.5/jquery.mobile-1.4.5.js',
                          'bower_components/angular-animate/angular-animate.js',
                          'bower_components/video.js/dist/video-js/video.dev.js',
                          'bower_components/waypoints/lib/jquery.waypoints.js',
                          'bower_components/jquery/color-animation.js',
                          'bower_components/select2-4.0.0/dist/js/select2.js',
                          'bower_components/ui-utils.js',
                          'bower_components/angular-ui-select/dist/select.js',
                          'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
                          'routes.js',
                          'services.js',
                          'tipekit.js',
                          'about/about.js',
                          'collections/season.js',
                          'components/header/header.js',
                          'components/logo/logo.js',
                          'components/nav/nav.js',
                          'components/scroller.js',
                          'contact/contact.js',
                          'home/home.js',
                          'journal/journal.js',
                          'legal/legal.js',
                          'stores/stores.js',
                          'bower_components/angular-mailchimp/angular-mailchimp.js'

           ],
           tasks: ['concat', 'uglify']
        },


         htmlSnapshot: {
          all: {
             options: {
              snapshotPath: 'snapshots/',
              sitePath: 'http://localhost/',
              msWaitForPages: 4000,
              urls: [
                "/",
                "/#collections/evening/fall-winter-2015",
                "/#collections/evening/evening/resort-2016",
                "/#collections/evening/spring-summer-2015",
                "/#collections/bridal/spring-summer-2016",
                "/#collections/bridal/fall-winter-2015",
                "/#collections/bridal/spring-summer-2015",
                "#/about/designer",
                "#/about/brand",
                "#/journal",
                "#/contact",
                "#/stores",
                "#/subscribe",
                "#/legal"
              ]
              // Task-specific options go here.
            }

          }

            // your_target: {
            //   options: {
            //     // Target-specific options go here.
            //   }
            // }
          }


    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-snapshot');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat:js', 'uglify:js']);
};





// module.exports = function(grunt) {
//
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     concat: {
//       options: {
//         separator: ';'
//       },
//       dist: {
//         src: ['/**/*.js'],
//         dest: 'dist/<%= pkg.name %>.js'
//       }
//     },
//     uglify: {
//       options: {
//         banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
//       },
//       dist: {
//         files: {
//           'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
//         }
//       }
//     },
//     qunit: {
//       files: ['test/**/*.html']
//     },
//     jshint: {
//       files: ['Gruntfile.js',
//               "/bower_components/jquery/dist/jquery.min.js",
//               "/bower_components/angular/angular.min.js",
//               "/bower_components/angular-route/angular-route.min.js",
//               "/bower_components/angular-resource/angular-resource.min.js",
//               "/bower_components/angular-touch/angular-touch.min.js",
//               "/bower_components/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.js",
//               "/bower_components/angular-animate/angular-animate.min.js",
//               "/bower_components/hammer-js.min.js",
//               "/bower_components/angular-gestures-master/dist/gestures.js",
//               "/bower_components/video.js/dist/video-js/video.dev.js",
//               "/bower_components/waypoints/lib/jquery.waypoints.js",
//               "/bower_components/waypoints/lib/waypoints.debug.js",
//               "/bower_components/jquery/color-animation.js",
//               "/bower_components/select2-4.0.0/dist/js/select2.min.js",
//               "/bower_components/angular-sanitize/angular-sanitize.min.js",
//               "/bower_components/angular-mailchimp/angular-mailchimp.js",
//               "/bower_components/ui-utils.js",
//               "/bower_components/angular-ui-select/dist/select.min.js",
//               "/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js",
//               '/app.js',
//               '/routes.js',
//               '/services.js',
//               '/tipekit.js',
//               '/about/about.js',
//               '/collections/season.js',
//               '/components/header/header.js',
//               '/components/logo/logo.js',
//               '/components/nav/nav.js',
//               '/components/scroller.js',
//               '/contact/contact.js',
//               '/home/home.js',
//               '/journal/journal.js',
//               '/legal/legal.js',
//               '/stores/stores.js',
//               '/subscribe/subscribe.js'
//                        ],
//       options: {
//         // options here to override JSHint defaults
//         globals: {
//           jQuery: true,
//           console: true,
//           module: true,
//           document: true
//         }
//       }
//     },
//     watch: {
//       files: ['<%= jshint.files %>'],
//       tasks: ['jshint', 'qunit']
//     }
//   });
//
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//   grunt.loadNpmTasks('grunt-contrib-jshint');
//   grunt.loadNpmTasks('grunt-contrib-qunit');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   grunt.loadNpmTasks('grunt-contrib-concat');
//
//   grunt.registerTask('test', ['jshint', 'qunit']);
//
//   grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
//
// };
