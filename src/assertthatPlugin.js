var assert = require('assert');

module.exports = function() {
  const plugin = {};
  plugin.getPropertyName = function() {
    return 'property-name';
  };

  plugin.addProperties = function(is, actual) {
    is.isTrue = function() {
        if(actual === true) {
          return;
        }
        assert.fail(undefined, undefined, 'Expected `' + actual + '` to be a True.');
    };
  };

  return plugin;
};
