'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createFilterFiles = function createFilterFiles() {
    this.appTemplate('filter', 'modules/filter/' + this.name + '/' + this.name + 'filter');
    this.testTemplate('spec/filter', 'filter/' + this.name + '/' + this.name + 'filter');
    this.addScriptToTesterAppIndex('js/filter/' + this.name + '/' + this.name + 'filter');
};