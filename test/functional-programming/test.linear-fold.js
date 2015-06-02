(function() {
 'use strict';

  var should = require('should'),
      linearFold = require('./../../functional-programming/linear-fold.js').linearFold;

  describe('linearFold', function() {

    it('should return a linear fold of args', function() {
      var result = linearFold([1, 2, 3, 4, 5], function(a, b){ return a + b; });
      result.should.be.exactly(15);
    });

    it('should return a linear fold of args with initial value', function() {
      var result = linearFold([1, 2, 3, 4, 5], function(a, b){ return a + b; }, 1);
      result.should.be.exactly(16);
    });

    it('should return a linear fold of args with initial value', function() {
      var result = linearFold([1, 2, 3, 4, 5], function(a, b){ return a * b; }, 5);
      result.should.be.exactly(600);
    });

  });
})();
