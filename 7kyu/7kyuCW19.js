// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

//My solution:
function listToArray(list) {
    const newArr = [];
    while(list){
      newArr.push(list.value);
      list = list.next;
    }
    return newArr;
  }