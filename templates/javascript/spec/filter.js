'use strict';

describe('Filter: <%= _.camelize(name) %>Filter', function () {

  // load the filter's module
  beforeEach(module('<%= _.camelize(appname) %>.filters'));

  // initialize a new instance of the filter before each test
  var <%= _.camelize(name) %>Filter;
  beforeEach(inject(function ($filter) {
    <%= _.camelize(name) %>Filter = $filter('<%= _.camelize(name) %>Filter');
  }));

  it('should return the input prefixed with "<%= _.camelize(name) %>Filter filter:"', function () {
    var text = 'angularjs';
    expect(<%= _.camelize(name) %>Filter(text)).toBe('<%= _.camelize(name) %>Filter filter: ' + text);
  });

});
