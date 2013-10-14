'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var Comang = module.exports = function Comang(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({
            skipInstall: options['skip-install']
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(Comang, yeoman.generators.Base);

Comang.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        type: 'confirm',
        name: 'jquery',
        message: 'Would you like to include Bootstrap and JQuery?',
        default: true
    },
    {
        name: 'appName',
        message: 'What do you want to call your angular modules library?'
    }];

    this.prompt(prompts, function (props) {
        this.jquery = props.jquery;
        this.appname = props.appName;

        cb();
    }.bind(this));
};

Comang.prototype.projectfiles = function projectfiles() {
    // Dotfiles
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_jshintrc', '.jshintrc');
//    this.copy('_gitattributes', '.gitattributes');

    // Package
    this.copy('_package.json', 'package.json');

    // Front
    this.copy('_bower.json', 'bower.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_karma-e2e.conf.js', 'karma-e2e.conf.js');
    this.copy('_karma.conf.js', 'karma.conf.js');

    // Express
    this.copy('_app.js', 'app.js');
    this.copy('_app_grunt.js', 'app_grunt.js');
    this.copy('_server.js', 'server.js');

};

Comang.prototype.app = function app() {

    this.mkdir('config');
    this.mkdir('config/environments');
    this.mkdir('routes');
    this.mkdir('views');

    this.directory('routes');
    this.directory('views');
    this.directory('config');

    // Frontend
    this.mkdir('main');
    this.mkdir('main/common');
    this.mkdir('main/modules');
    this.mkdir('main/tester_app');
    this.directory('main');

    this.mkdir('test');
    this.mkdir('test/spec');
    this.mkdir('test/spec/controller');
    this.directory('test');
};

