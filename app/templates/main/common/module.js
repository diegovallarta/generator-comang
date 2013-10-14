
angular.module('<%= _.camelize(appname)%>.filters', []);
angular.module('<%= _.camelize(appname)%>.directives', []);
angular.module('<%= _.camelize(appname)%>.services', []);
angular.module('<%= _.camelize(appname)%>.decorators', []);
angular.module('<%= _.camelize(appname)%>', ['<%= _.camelize(appname)%>.filters', '<%= _.camelize(appname)%>.directives', '<%= _.camelize(appname)%>.services', '<%= _.camelize(appname)%>.decorators']);
