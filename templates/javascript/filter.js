'use strict';

angular.module('<%= _.camelize(appname) %>.filters')
    .filter('<%= _.camelize(name) %>Filter', function () {
        return function (input) {
            return '<%= _.camelize(name) %>Filter filter: ' + input;
        };
    });
