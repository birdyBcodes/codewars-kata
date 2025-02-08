// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

//My solution: 
function arrayLowerCase(arr) {
    return arr.map(str => str.toLowerCase ? str.toLowerCase() : str) 
    }