'use strict';

angular.module('<%= _.camelize(appname) %>.services')
    .value('<%= _.classify(name) %>', 42);
