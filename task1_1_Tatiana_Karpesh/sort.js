// Implement a function that sort array of numbers and return sorted array.
// Sort type - all, except primitive like bubble sort.

function selectionSort(arr) {
  for (var mainCounter = 0; mainCounter < arr.length; mainCounter++) {
    var indexOfMin = mainCounter;

    for (var internalCounter = mainCounter + 1; internalCounter < arr.length; internalCounter++) {
      if (arr[internalCounter] < arr[indexOfMin]) {
        indexOfMin = internalCounter;
      }
    }

    if (mainCounter != indexOfMin) {
      swap = arr[mainCounter];
      arr[mainCounter] = arr[indexOfMin];
      arr[indexOfMin] = swap;
    }
  }

  return arr;
}

console.log(selectionSort([1, 6, 2, 11, 2, 5, 4, 4, 3]));
