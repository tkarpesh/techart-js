// Implement a function that returns the first element in array that satisfies
// given condition.

function firstElementSearch(arr, condition) {
  for(var counter = 0; counter < arr.length; counter++) {
    if(condition(arr[counter])) {
      return arr[counter];
    }
  }
}

firstElementSearch([1, 2, 3, 4, 5, 6], function(item) { return item < 4; })
