(function() {
  'use strict';

  var map = function(array, callback) {
    var result = []
    for(var i = 0; i < array.length; i++) {
      result[i] = callback.call(this, array[i], i, array);
    }
    return result;
  };

  module.exports.map = map;
})();
