(function() {
  'use strict';

  var filter = require('./../functional-programming/filter.js').filter,
      linearFold = require('./../functional-programming/linear-fold.js').linearFold;

  var isEven = function(value) {
    if(value % 2 === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  var sum = function(a, b) {
    return a + b;
  }

  var averageOfEven = function(array) {
    var evenNumbers = filter(array, isEven);
    var len =  evenNumbers.length;
    return linearFold(evenNumbers, sum) / len;
  }

  module.exports.averageOfEven = averageOfEven;
})();
