// In this Kata, you will be given a number in form of a string and an integer k and your task is to insert k commas into the string and determine which of the partitions is the largest.

//My solution:
function solve(str, k) {
    const newLength = str.length - k;
    let max = 0;
    for (let i = 0; i + newLength <= str.length; ++i) {
      const num = +str.slice(i, i + newLength);
      max = Math.max(num, max);
    }
    return max;
  }
  

