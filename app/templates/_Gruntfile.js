// Generated on 2013-07-11 using generator-angular 0.3.0
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
    // require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
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

    grunt.loadNpmTasks('grunt-express');

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
                    '<%= yeoman.main %>/tester_app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['copy:server']
            }
        },
        express: {
            options: {
                port: 3000,
                hostname: '*'
            },
            livereload: {
                options: {
                    livereload: true,
                    server: path.resolve('app.js'),
                    bases: [path.resolve('./.tmp'), path.resolve(__dirname, yeomanConfig.main+'/tester_app')]
                }
            },
            test: {
                options: {
                    server: path.resolve('app.js'),
                    bases: [path.resolve('./.tmp'), path.resolve(__dirname, 'test')]
                }
            },
            dist: {
                options: {
                    server: path.resolve('app.js'),
                    bases: path.resolve(__dirname, yeomanConfig.dist)
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= express.options.port %>'
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

    /*grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has been ' + action);
        var cfgkey = ['copy', 'server', 'files'];
        grunt.config.set(cfgkey, grunt.config.get(cfgkey).map(function(file) {
            grunt.log.writeln(file.src);
            file.src = filepath;
            grunt.log.writeln(file.src);
            return file;
        }));

        grunt.task.run([
            'copy:server',
            'express:livereload'
        ]);
    });*/

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'express:dist', 'express-keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'express:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', function(mode){
        if(mode === 'debug'){
            return grunt.task.run([
                'clean:server',
                'concurrent:test',
                'express:test',
                'karma:debug',
                'jshint'
            ]);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:test',
            'express:test',
            'karma:unit',
            'jshint'
        ]);
    });

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