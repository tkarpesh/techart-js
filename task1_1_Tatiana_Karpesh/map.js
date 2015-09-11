// Implement a function that creates new array with the results of calling a provided function
// on every element in this array.

function map(arr, condition) {
  var result = [];

  for(var counter = 0; counter < arr.length; counter++) {
    result.push(condition(arr[counter]));
  }
  return result;
}

console.log(map([1, 2, 3, 4, 5, 6], function(item) { return item > 3; }));
