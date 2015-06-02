(function() {
  'use strict';

  var filter = function(array, callback) {
    var filtered = []
    for(var i = 0; i < array.length; i++) {
      if(callback.call(this, array[i], i, array) === true) {
        filtered.push(array[i]);
      }
    }
    return filtered;
  }

  module.exports.filter = filter;
})();