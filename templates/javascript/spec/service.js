'use strict';

describe('Service: <%= _.classify(name) %>', function () {

    // load the service's module
    beforeEach(module('<%= _.camelize(appname) %>.services'));

    // instantiate service
    var <%= _.classify(name) %>;
    beforeEach(inject(function (_<%= _.classify(name) %>_) {
        <%= _.classify(name) %> = _<%= _.classify(name) %>_;
        }));

    it('should do something', function () {
        expect(!!<%= _.classify(name) %>).toBe(true);
    });

});