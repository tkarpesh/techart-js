(function() {
  'use strict';

  var linearFold = function(arr, callback /* ..init value */) {
    var i, result;

    if(arguments.length >= 3) {
      i = 0;
      result = arguments[2];
    } else {
      i = 1;
      result = arr[0];
    }

    for(var length = arr.length; i < length; i++) {
      result = callback(result, arr[i], i, arr);
    }

    return result;
  };

  module.exports.linearFold = linearFold;
})();
