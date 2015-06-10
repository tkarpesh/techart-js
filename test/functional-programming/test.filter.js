(function() {
 'use strict';

  var should = require('should'),
      filter = require('./../../functional-programming/filter.js').filter;

  var condition = function(value) {
    return !(value % 2 === 0);
  }

  describe('filter', function() {

    it('should return true for odd number', function() {
      var result = condition(5);
      result.should.equal(true);
    });

    it('should return a filtered array only of odd numbers', function() {
      var result = filter([1, 2, 3, 4, 6, 7, 11, 13], condition);
      result.should.eql([1, 3, 7, 11, 13]);
    });

    it('should return an empty array', function() {
      var result = filter([2, 2, 6, 4, 6, 8, 10], condition);
      result.should.eql([]);
    });

  });
})();