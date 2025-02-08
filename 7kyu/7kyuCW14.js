// Create a function that takes an array of letters, and combines them into words in a sentence.


//My solution: 
function arrAdder(arr) {
    let newArr = "";
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr.length; j++) newArr += arr[j][i];
      if (i < arr[0].length - 1) newArr += " ";
    }
    return newArr;
  }