'use strict';

angular.module('<%= _.camelize(appname)%>App', ['ngRoute', '<%= _.camelize(appname)%>'])
  .config(['$routeProvider', function (routeProvider) {
    routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
