(function(){
  'use strict'

  function memoization(fn) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      fn.memo = fn.memo || {};
      return (args in fn.memo) ? fn.memo[args] : fn.memo[args] = fn.apply(this, args);
    };
  }
})();