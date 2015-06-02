(function(){
  'use strict'

  var first = function(array /*condition*/) {
    if(arguments.length >= 2) {
      var condition = arguments[1];
    } else {
      return array[0];
    }
    for(var i = 0; i < array.length; i++) {
      if(condition.call(this, array[i]) == true) {
        return array[i];
      }
    }
    return null;
  }

  module.exports.first = first;
})();
