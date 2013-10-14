'use strict';

angular.module('<%= _.camelize(appname) %>', [<%= angularModules %>])
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
.otherwise({
    redirectTo: '/'
    });
});
