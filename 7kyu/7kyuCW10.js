// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

//My solution:
function minSum(arr) {
    return arr.sort((a, b) => a - b)
      .map((value, index, array) => {
        return value * array[array.length - 1 - index];
      })
      .filter((value, index, array) => {
        return index < array.length / 2; //
      })
      .reduce((total, value) => {
        return total + value;
      })
  }