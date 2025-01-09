// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

//My solution:
var findAverage = function (nums) {
    const sum = nums.reduce((acc, c) => acc + c, 0);
    const mean = sum / nums.length;
    return mean;
  }

