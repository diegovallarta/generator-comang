# generator-comang
================

A yeoman generator for creating an AngularJS (v1.2.0-rc.2) modules project.

Based on the [booang](https://github.com/diegovallarta/generator-booang) generator,
the [MEAN stack](https://github.com/wlepinski/generator-meanstack) generator by W. Lepinski and
the [Angular](https://github.com/yeoman/generator-angular) generator for the sub-generators.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed on the latest version.
    `npm install -g yo`
- Install the generator: `npm install -g generator-comang`
- Run: `yo comang` on your new folder app

After that follow the steps below.

*1.a Use the command `grunt server` to start the tester application with built-in preview server with LiveReload on Chrome.
*1.b Modules generated by the sub-generators are copied to `./main/tester_app/js/` immediately on edition by the LiveReload for development purposes.
**Note: Do not edit directly your modules on the tester application or your changes will be lost.**

*2.a Use the command `grunt test` for launching unit tests with Karma and linting with jshint.
*2.b For test debugging use `grunt test:debug`

*3. Use the command `grunt build` to generate a concatenated file of all your angular modules (in the future I will include a min.js file also).


### App
Sets up a new Expressjs, AngularJS and Node.js stack, generating all the boilerplate you need to get started developing modules for angular.
The project generator also optionally installs Twitter Bootstrap and JQuery.

### Generators

Available generators:

* angular
* angular:controller [module name]
* angular:directive [module name]
* angular:filter [module name]
* angular:service [module name]
* angular:provider [module name]
* angular:factory [module name]
* angular:value [module name]
* angular:constant [module name]
* angular:decorator [module name]

**Note: Generators are to be run from the root directory of your app.**

Sub-generators generate files under `./main/modules/`, and correspondent test files under `./test/spec/` and add the new dependency to the `./main/tester_app/index.html` file for starting right away writing your code.

## Bower Components

The following packages are always installed by the project generator:

* angular
* angular-mocks
* angular-scenario
* angular-animate
* angular-route
* angular-cookies
* angular-loader
* angular-resource
* angular-sanitize
* angular-touch
* es5-shim
* json3

Bower is set to install packages on `./main/tester_app/libs/`

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)