// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object. Write a function listToArray (or list_to_array in Python) that converts a list to an array.

//My solution:
function listToArray(list) {
    const newArr = [];
    while(list){
      newArr.push(list.value);
      list = list.next;
    }
    return newArr;
  }