(function() {
 'use strict';

  var should = require('should'),
      curry = require('./../../functional-programming/curry.js').curry;

  describe('carry', function() {
    var argJoin = function(a1, a2, a3) {
      return a1 + ', ' + a2 + ', ' + a3;
    };

    it('should return a join args', function() {
      var result = argJoin('x', 'y', 'z');
      result.should.equal('x, y, z');
    });

    it('should return function if pass less arguments (1 of 3)', function() {
      var curryFunction = curry(argJoin);
      var result = curryFunction('x');
      result.should.be.a.Function;
    });

    it('should return function if pass less arguments (2 of 3)', function() {
      var curryFunction = curry(argJoin);
      var result = curryFunction('x')('y');
      result.should.be.a.Function;
    });

    it('should return result of function if pass all arguments', function() {
      var curryFunction = curry(argJoin);
      var result = curryFunction('x')('y')('z');
      result.should.be.equal(argJoin('x', 'y', 'z'));
    });
  });
})();
