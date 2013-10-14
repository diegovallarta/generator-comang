'use strict';

angular.module('<%= _.camelize(appname) %>.services')
    .constant('<%= _.classify(name) %>', 42);
