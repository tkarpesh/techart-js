(function() {
 'use strict';

  var should = require('should'),
      map = require('./../../functional-programming/map.js').map;

  var callback = function(value) {
    return ++value;
  }

  describe('map', function() {

    it('should return an increment value', function() {
      var result = callback(5);
      result.should.be.exactly(6);
    });

    it('should return an increment values of array', function() {
      var result = map([1, 2, 3], callback);
      result.should.eql([2, 3, 4]);
    });

  });
})();