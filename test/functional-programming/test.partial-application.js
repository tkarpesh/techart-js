(function() {
 'use strict';

  var should = require('should'),
      partialApplication = require('./../../functional-programming/partial-application.js').partialApplication;

  describe('partialApplication', function() {
    var sum = function() {
      var result = 0;
      for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
      }
      return result;
    };

    var multiple = function() {
      var result = 0;
      for(var i = 0; i < arguments.length; i++) {
        result *= arguments[i];
      }
      return result;
    }

    it('should return a function', function() {
      var currentSum = partialApplication(sum, 1, 2);
      currentSum.should.be.a.Function;
    });

    it('should return result of function arguments when call it', function() {
      var currentSum = partialApplication(sum, 1, 2);
      currentSum().should.be.exactly(sum(1, 2));

      var multiplicationResult = partialApplication(multiple, 2, 2, 2);
      multiplicationResult().should.be.exactly(multiple(2, 2, 2));
    });

    it('should be able to get additional arguments and return result of all', function() {
      var currentSum = partialApplication(sum, 1, 2);
      var final = currentSum(2, 3, 5)
      final.should.be.exactly(sum(1, 2, 2, 3, 5));

      var multiplicationResult = partialApplication(multiple, 2);
      var finalMultiplication = multiplicationResult(2, 3, 5);
      finalMultiplication.should.be.exactly(multiple(2, 2, 3, 5));
    });
  });
})();
