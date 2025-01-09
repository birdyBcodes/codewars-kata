// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

//My solution:
function repeats(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
     if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
       count += arr[i];
     }
    
    }
    return count;
    };