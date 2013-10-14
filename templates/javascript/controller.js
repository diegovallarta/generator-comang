'use strict';

angular.module('<%= _.camelize(appname) %>')
    .controller('<%= _.classify(name) %>Ctrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
