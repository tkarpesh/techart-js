(function(){
  'use strict'

  var linearFold = require('./../functional-programming/linear-fold.js').linearFold;

  function sumOfRandomNumbers(quantity, upperBound){
    var numbers = [];
    for(var i = 0; i < quantity; i++) {
      numbers[i] = Math.floor((Math.random() * upperBound) + 1);
    }
    return linearFold(numbers, function(a, b) { return a + b; });
  }

   module.exports.sumOfRandomNumbers = sumOfRandomNumbers;
})();