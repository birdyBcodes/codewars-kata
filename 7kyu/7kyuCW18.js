// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

//My solution: 
function transposeTwoStrings(arr){
    const result = [];
    let len = Math.max(arr[0].length, arr[1].length);
    
    for (let i = 0; i < len; i++) {
      let column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
      result.push(column);
    }
    
    return result.join("\n");
  }
