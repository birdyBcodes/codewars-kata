// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.



//My solution:
function cutIt(arr) {
    let smallest = arr[0].length;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest) {
        smallest = arr[i].length;
      }
    }
    let map = arr.map(function(x) {
      return x.slice(0, smallest);
    });
    return map;
  };