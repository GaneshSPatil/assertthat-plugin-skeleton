var assert = require('assertthat');
var typePlugin = require('../src/assertthatPlugin.js');

describe('Plugin Property name', function() {
  it('should return the property name of the plugin', function() {
    var name = typePlugin().getPropertyName();
    assert.that(name).is.equalTo('property-name');
  });
});
