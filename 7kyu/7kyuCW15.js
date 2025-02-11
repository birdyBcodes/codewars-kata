// Write a function that takes two array arguments, and returns a new array populated with the elements that appear in either array, but not in both. Elements should only appear once in the returned array.

// The order of the elements in the result should follow what appears in the first array, then the second one.

//My solution:
function hotSingles(arr1, arr2) {
    let newArr = [];  
    for(let i=0;i<arr1.length;i++)
    {
      if(!newArr.includes(arr1[i]) && !arr2.includes(arr1[i]))
      {
        newArr.push(arr1[i]);
      }
    }
    for(let i=0;i<arr2.length;i++)
    {
      if(!newArr.includes(arr2[i]) && !arr1.includes(arr2[i]))
      {
        newArr.push(arr2[i]);
      }
    }
    return newArr;
  }