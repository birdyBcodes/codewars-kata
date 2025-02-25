// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

//My solution:
function mergeArrays(a, b) {
    // your code here
    const array = [...a, ...b].sort((a,b) => a-b)
    const answer = array.filter((item, index) => array.indexOf(item) === index)
    
    return answer
  }