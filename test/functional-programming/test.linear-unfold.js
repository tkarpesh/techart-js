(function() {
 'use strict';

  var should = require('should'),
      linearUnfold = require('./../../functional-programming/linear-unfold.js').linearUnfold;

  var callback = function(value) {
    value *= 3;
    if(value % 2 == 0) {
      return [value, true];
    }
    else {
      return [value, false];
    }
  }

  describe('linearUnfold', function() {

    it('should return a linear unfold', function() {
      var result = linearUnfold(callback, 1);
      result[0].should.equal(1);
    });

  });
})();