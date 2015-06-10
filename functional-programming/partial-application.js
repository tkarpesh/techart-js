(function() {
  'use strict';

  function partialApplication(fn /*... args */) {
    var slice = Array.prototype.slice,
        args = slice.call(arguments, 1);

    return function() {
      return fn.apply(this, args.concat(slice.call(arguments, 0)));
    }
  }

  module.exports.partialApplication = partialApplication;
})();
