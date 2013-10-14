'use strict';

angular.module('<%= _.camelize(appname) %>.decorators')
    .config(function ($provide) {
        $provide.decorator('<%= _.camelize(name) %>', function ($delegate) {
            // decorate the $delegate
            return $delegate;
        });
    });
