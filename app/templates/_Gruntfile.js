'use strict';
var LIVERELOAD_PORT = 35729;
var path = require('path');

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // configurable paths
    var yeomanConfig = {
        main: 'main',
        dist: 'dist'
    };

    try {
        yeomanConfig.main = require('./bower.json').appPath || yeomanConfig.main;
    } catch (e) {}

    grunt.initConfig({
        yeoman: yeomanConfig,
        pkg: require('./package.json'),
        watch: {
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT,
                    spawn: false
                },
                files: [
                    '<%= yeoman.main %>/tester_app/*.html',
                    '<%= yeoman.main %>/tester_app/partials/*.html',
                    '{.tmp,<%= yeoman.main %>}/tester_app/css/{,*/}*.css',
                    '{.tmp,<%= yeoman.main %>}/modules/**/**/*.js',
                    '{.tmp,<%= yeoman.main %>}/common/*.js',
                    '<%= yeoman.main %>/tester_app/js/controller/*.js',
                    '<%= yeoman.main %>/tester_app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['sync:server']
            },
            css: {
                files: '<%= yeoman.main %>/tester_app/css/less/*.less',
                tasks: ['less:compile']
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    livereload: true,
                    base: '<%= yeoman.main %>/tester_app/'
                }
            },
            test: {
                options: {
                    base: '<%= yeoman.test %>/'
                }
            },
            dist: {
                options: {
                    port: 3000,
                    base: '<%= yeoman.dist %>/'
                }
            }
        },
        less: {
            compile: {
                  files: [{
                    expand: true,
                    cwd: '<%= yeoman.main %>/tester_app/css/less/',
                    src: ['*.less'],
                    dest: '<%= yeoman.main %>/tester_app/css/',
                    ext: '.css'
                }]
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.server.options.port %>'
            }
        },
        meta: {
            banner: '/**\n' + ' * <%= pkg.name %> angular modules\n' +
                ' * @version v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>\n' +
                ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' + ' */'
        },
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= yeoman.dist %>/*',
                            '!<%= yeoman.dist %>/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.main %>/js/{,*/}*.js',
                '<%= yeoman.main %>/modules/**/{,*/}*.js',
                '<%= yeoman.main %>/common/{,*/}*.js'
            ]
        },
        // not used since Uglify task does concat,
        // but still available if needed
        concat: {
            options: {
                stripBanners: true,
                // Replace all 'use strict' statements in the code with a single one at the top
                banner: '<%= meta.banner %>' + '\n' + '\'use strict\';\n',
                process: function(src, filepath) {
                    return '// Source: ' + filepath + '\n' +
                        src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1')+'\n';
                },
                separator: ';'
            },
            dist: {
                src: [
                    '<%= yeoman.main %>/common/{,*/}*.js',
                    '<%= yeoman.main %>/modules/**/{,*/}*.js'
                ],
                dest: '<%= yeoman.dist %>/<%= pkg.name %>.js'
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/js/{,*/}*.js',
                        '<%= yeoman.dist %>/css/{,*/}*.css',
                        '<%= yeoman.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/fonts/*'
                    ]
                }
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: '<%= yeoman.dist %>/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            // By default, your `index.html` <!-- Usemin Block --> will take care of
            // minification. This option is pre-configured if you do not wish to use
            // Usemin blocks.
            // dist: {
            //   files: {
            //     '<%= yeoman.dist %>/styles/main.css': [
            //       '.tmp/styles/{,*/}*.css',
            //       '<%= yeoman.main %>/styles/{,*/}*.css'
            //     ]
            //   }
            // }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.main %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'libs/**/*',
                        'img/{,*/}*.{gif,webp,svg}'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/img',
                    dest: '<%= yeoman.dist %>/img',
                    src: [
                        'generated/*'
                    ]
                }]
            },
            server:{
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.main %>/modules',
                    dest: '<%= yeoman.main %>/tester_app/js',
                    src: [
                        '**/**/*.js'
                    ]
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.main %>',
                    dest: '<%= yeoman.main %>/tester_app/js',
                    src: [
                        'common/*.js'
                    ]
                }]
            }
        },
        sync: {
            server: {
                files: [
                    {
                        cwd: '<%= yeoman.main %>/modules',
                        dest: '<%= yeoman.main %>/tester_app/js',
                        src: [
                            '**/**/*.js'
                        ]
                    },
                    {
                        cwd: '<%= yeoman.main %>',
                        dest: '<%= yeoman.main %>/tester_app/js',
                        src: [
                            'common/*.js'
                        ]
                    },
                    {
                        cwd: '<%= yeoman.main %>/common/css',
                        dest: '<%= yeoman.main %>/tester_app/css',
                        src: [
                            '*.css'
                        ]
                    }
                ]
            }
        },
        concurrent: {
            server: [
                'copy:server'
            ],
            test: [

            ],
            dist: [
                'imagemin',
                'htmlmin'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            debug: {
                configFile: 'karma.conf.js',
                singleRun: false
            }
        },
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>/js',
                    src: '*.js',
                    dest: '<%= yeoman.dist %>/scripts'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/scripts/scripts.js': [
                        '<%= yeoman.dist %>/scripts/scripts.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('server', [
            'clean:server',
            'concurrent:server',
            'connect:server',
            'open:server',
            'watch'
    ]);

    grunt.registerTask('test', function(mode){
        if(mode === 'debug'){
            return grunt.task.run([
                'clean:server',
                'concurrent:test',
                'connect:test',
                'karma:debug',
                'jshint'
            ]);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:test',
            'connect:test',
            'karma:unit',
            'jshint'
        ]);
    });

    grunt.registerTask('testless', [
        'less:compile'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
//        'concurrent:dist',
        'concat:dist',
        'copy:dist',
        'ngmin',
//        'cssmin',
        'rev'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
