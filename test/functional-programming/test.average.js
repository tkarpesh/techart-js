(function() {
 'use strict';

  var should = require('should'),
      average = require('./../../functional-programming/average.js').averageOfEven;

  describe('average', function() {

    it('should return an average of array even vallues', function() {
      var result = average([1, 2, 3, 4, 5, 6, 7, 9, 8]);
      result.should.equal(5);
    });

    it('should return an average of array even vallues', function() {
      var result = average([1, 3, 5]);
      result.should.eql(NaN);
    });

  });
})();