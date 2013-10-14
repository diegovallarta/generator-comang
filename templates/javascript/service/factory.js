'use strict';

angular.module('<%= _.camelize(appname) %>.services')
    .factory('<%= _.classify(name) %>', function () {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function () {
                return meaningOfLife;
            }
        };
    });
