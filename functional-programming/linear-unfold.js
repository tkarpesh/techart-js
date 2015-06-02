(function() {
  'use strict';

  var linearUnfold = function(callback, init) {
    var unfoldArray = [];

    function unfolding(state, currentValue) {
      if (state == true) {
        unfoldArray.push(currentValue);
        var tuple = callback.call(this, currentValue);
        return unfolding(tuple[1], tuple[0]);
      } else {
        return unfoldArray;
      }
    }

    return unfolding(true, init);
  };

  module.exports.linearUnfold = linearUnfold;
})();
