// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

    // 1. getLength(arr)    should return length of arr
    // 2. getFirst(arr)     should return the first element of arr
    // 3. getLast(arr)      should return the last element of arr
    // 4. pushElement(arr)  should push an element to arr, and then return arr
    // 5. popElement(arr)   should pop an element from arr, and then return arr

//My solutions:
function getLength(arr){
    return arr.length;
  }
  function getFirst(arr){
    return arr[0]
  }
  function getLast(arr){
   return arr[arr.length-1]
  }
  function pushElement(arr){
    var el=1;
    let newArr = arr.push(el);
    return arr;
  }
  function popElement(arr){
    let popSave = arr.pop();
    return arr;
  }