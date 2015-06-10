(function() {
  'use strict';

  var map = function(array, callback) {
    var result = []
    for(var i = 0, length = array.length; i < length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  };

  module.exports.map = map;
})();
