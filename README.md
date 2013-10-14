# generator-bowang
================

A yeoman generator for creating bower dependencies using angularjs(v1.2.0-rc.2).

Based on the [booang](https://github.com/diegovallarta/generator-booang) generator.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed on the latest version.
    `npm install -g yo`
- Install the generator: `npm install -g generator-comang`
- Run: `yo comang` on your new folder app

After that follow the steps below.

1. Use the comand `grunt server` to start the application with built-in preview server with LiveReload on chrome. 
2. Use the command <code>grunt</code> to generate the optimized files for your application.


### App
Sets up a new MEAN (MongoDB, Expressjs, AngularJS and Node.js) stack, generating all the boilerplate you need to get started developing modules for angular. The app generator also optionally installs Twitter Bootstrap and JQuery.

## Bower Components

The following packages are always installed by the [app](#app) generator:

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
* bootstrap
* es5-shim
* json3

Bower is set to install packages on `./app/libs/`

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)