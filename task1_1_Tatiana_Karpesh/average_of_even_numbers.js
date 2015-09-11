// Given array of numbers, find average of even.

function averageOfEven(arr) {
  var sum = 0;
  var count = 0;

  for (var counter = 0; counter < arr.length; counter++) {
    if (arr[counter] % 2 == 0) {
      sum += arr[counter];
      count ++;
    }
  }

  return sum / count;
}

console.log(averageOfEven([1, 2, 3, 4, 5, 6]));
