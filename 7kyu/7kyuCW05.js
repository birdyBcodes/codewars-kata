// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
//minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)

//My solution:
function minimumSteps(numbers, value){
    let sorted = numbers.sort((a, b) => a -b);
    let count = 0;
    let now = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      if (now < value) {
        now += numbers[i];
        count++;
      }
    }
    
    return count - 1;
  }
