(function() {
 'use strict';

  var should = require('should'),
      first = require('./../../functional-programming/first.js').first;

  describe('first', function() {

    var condition = function(value) {
      return (value % 2 === 0);
    }

    var secondCondition = function(value) {
      return (value > 5);
    }

    var testArray = [1, 2, 3, 4, 5, 6, 7, 9, 8];
    it('first element of array', function() {
      var result = first(testArray);
      result.should.equal(1);
    });

    it('should return an average of array even vallues', function() {
      var result = first(testArray, secondCondition);
      result.should.equal(6);
    });
  });
})();