'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createServiceFiles = function createServiceFiles() {
    this.appTemplate('service/service', 'modules/services/' + this.name + '/' + this.name + 'service');
    this.testTemplate('spec/service', 'services/' + this.name + '/' + this.name + 'service');
    this.addScriptToTesterAppIndex('js/services/' + this.name + '/' + this.name + 'service');
};