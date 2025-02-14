// In this kata you are given an array to sort but you're expected to start sorting from a specific position of the array (in ascending order) and optionally you're given the number of items to sort.


//My solution: 
function ascendingSort(a, b) { return a - b; }

function sectSort(arr, start, length) {
  var len = (length || arr.length) + start;
	return [].concat(
  	arr.slice(0, start),
    arr.slice(start, len).sort(ascendingSort),
    arr.slice(len)
  );
}