'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createDecoratorFiles = function createDecoratorFiles() {
    this.appTemplate('decorator', 'modules/decorator/' + this.name + '/' + this.name + "decorator");
    this.addScriptToTesterAppIndex('js/decorator/' + this.name + '/' + this.name + "decorator");
};