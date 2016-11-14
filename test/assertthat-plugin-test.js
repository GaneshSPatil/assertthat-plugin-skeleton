var assert = require('assertthat');
var typePlugin = require('../src/assertthat-plugin.js');

describe('assertthat-type', function() {
  describe('validate_keys', function() {

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

  describe('Property name', function() {
    it('should return the property name of the plugin', function() {
      var name = typePlugin().getPropertyName();
      assert.that(name).is.equalTo('property-name');
    });
  });

  describe('Add Properties', function() {
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
});