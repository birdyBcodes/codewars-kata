// Write a function that takes two arguments:

// An array: The array to be split into smaller parts.
// Chunk size: A positive integer, which is the size of each chunk.
// This function should split the given array into parts with the given chunk size, and return the result as a nested array.

// If the array cannot be evenly divided by the size, the last part may contain fewer elements.


//My solution:
function makeParts(arr, chunkSize) {
	let newArr = [];
  while (arr.length > 0){
    newArr.push(arr.splice(0, chunkSize));
    }
  return newArr;
}