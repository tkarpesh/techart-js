(function() {
 'use strict';

  var should = require('should'),
      sumOfRandom = require('./../../functional-programming/sum-of-rand.js').sumOfRandomNumbers;

  describe('sumOfRandom', function() {

    it('should return a number', function() {
      var result = sumOfRandom(10, 5);
      result.should.be.a.Number;
    });
  });
})();