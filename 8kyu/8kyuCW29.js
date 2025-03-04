// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

//My solution:
function findAverage(array) {
    let sum = array.reduce((acc, c)=> acc + c, 0)
    let average = sum / array.length
    if(array.length === 0){
      return 0
    }else{
      return average
    }
    
  }