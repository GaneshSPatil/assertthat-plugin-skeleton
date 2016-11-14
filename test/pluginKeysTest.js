var assert = require('assertthat');
var typePlugin = require('../src/assertthatPlugin.js');

describe('Plugin keys Validation', function() {

  it('should contain getPropertyName function', function() {
    var allKeys = Object.keys(typePlugin());
    assert.that(allKeys).is.containing('getPropertyName');

    var getPropertyName = typePlugin()['getPropertyName'];
    assert.that(getPropertyName).is.ofType('function');
  });

  it('should contain addProperties function', function() {
    var allKeys = Object.keys(typePlugin());
    assert.that(allKeys).is.containing('addProperties');

    var addProperties = typePlugin()['addProperties'];
    assert.that(addProperties).is.ofType('function');
  });
});

