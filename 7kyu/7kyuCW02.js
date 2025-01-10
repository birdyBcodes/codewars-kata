// You received an array with two strings.
// Create a function that will return their product as a string.

//My solution:
function strToNumbers(arr){
    let numberArr = [];
    length = arr.length;
    for(let i = 0; i <= arr.length; i++){
      numberArr.push(Number(arr[i]))
    }
    return numberArr
    }
     
  function arrMultiply(numberArr){
    return String(numberArr[0] * numberArr[1])
  }
  