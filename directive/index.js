'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createDirectiveFiles = function createDirectiveFiles() {
    this.appTemplate('directive', 'modules/directives/' + this.name + '/' + this.name + 'directive');
    this.testTemplate('spec/directive', 'directives/' + this.name + '/' + this.name + 'directive');
    this.addScriptToTesterAppIndex('js/directives/' + this.name + '/' + this.name + 'directive');
};