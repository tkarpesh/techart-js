// Implement a function that filters array based on callback result.

function filteredArray(arr, condition) {
  var result = [];

  for(var counter = 0; counter < arr.length; counter++) {
    if(condition(arr[counter])) {
      result.push(arr[counter]);
    }
  }

  return result;
}

console.log(filteredArray([1, 2, 3, 4, 5, 6], function(item) { return item < 4; }));
