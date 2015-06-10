(function() {
  'use strict';
  var common = {};
  common.isEven = isEven;
  common.sum = sum;

  var isEven = function(value) {
    return (value % 2 === 0)
  }

  var sum = function(a, b) {
    return a + b;
  }

  module.exports.isEven = isEven;
  module.exports.sum = sum;
})();
