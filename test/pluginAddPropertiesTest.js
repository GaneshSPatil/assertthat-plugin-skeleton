var assert = require('assertthat');
var typePlugin = require('../src/assertthatPlugin.js');

describe('Plugin Add Properties', function() {
  it('should add the properties to the assertthat-is', function() {
    var is = {};
    var actual = 'actual-value';
    var addProperties = typePlugin().addProperties;

    assert.that(Object.keys(is).length).is.equalTo(0);

    addProperties(is, actual);
    assert.that(Object.keys(is).length).is.greaterThan(0);
  });

  it('should add myAssertTrue property', function() {
    var is = {};
    var actual = true;
    var addProperties = typePlugin().addProperties;

    assert.that(Object.keys(is).length).is.equalTo(0);

    addProperties(is, actual);
    assert.that(Object.keys(is)).is.containing('myAssertTrue');
    assert.that(is.myAssertTrue).is.not.throwing('Expected `true` to be a True.');
  });
});
