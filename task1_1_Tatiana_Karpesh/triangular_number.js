// The sequence of triangle numbers is generated by adding the natural numbers.
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// List the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?

function getTriangularNumber(divisorsNumber) {
  var number = count = 1;
  var addingNumber = 0;

  while(addingNumber < divisorsNumber){
    addingNumber = 0;
    count += 1;
    number += count;

    if(number % 2 == 0) {
      for(i = 1; i <= Math.sqrt(number); i++) {
        if(number % i == 0) {
          addingNumber += 2;
        }
      }
    }
  }

  return number;
}
