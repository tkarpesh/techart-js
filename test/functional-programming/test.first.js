(function() {
 'use strict';

  var should = require('should'),
      first = require('./../../functional-programming/first.js').first;

  describe('first', function() {

    var condition = function(value) {
      if(value % 2 === 0) {
        return true;
      }
      return false;
    }

    var secondCondition = function(value) {
      if(value > 5) {
        return true;
      }
      return false;
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