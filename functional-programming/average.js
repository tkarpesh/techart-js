(function() {
  'use strict';

  var filter = require('./../functional-programming/filter.js').filter,
      linearFold = require('./../functional-programming/linear-fold.js').linearFold,
      common = require('./../functional-programming/common.js');

  var averageOfEven = function(array) {
    var evenNumbers = filter(array, common.isEven);
    var len =  evenNumbers.length;
    return linearFold(evenNumbers, common.sum) / len;
  }

  module.exports.averageOfEven = averageOfEven;
})();
