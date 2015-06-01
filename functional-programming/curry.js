(function() {
  'use strict';

  var curry = function(fn) {
    var n = fn.length;
    var getFunction = function(prev) {
      return function(arg) {
        var args = prev.concat(arg);
        if(args.length < n) {
            return getFunction(args);
        }
        else {
            return fn.apply(this, args);
        }
      };
    };

    return getFunction([]);
  };

  module.exports.curry = curry;
})();
