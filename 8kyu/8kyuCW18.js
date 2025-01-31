// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.



//My solution:
function firstToLast(str,char){
    let first = str.indexOf(char)
    let last = str.lastIndexOf(char)
    let diff = last - first
    if(first === -1){
      return -1
    } else{
      return diff
    }
  }