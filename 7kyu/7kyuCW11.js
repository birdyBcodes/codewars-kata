//Given an array/list [] of integers , Find the product of the k maximal numbers.
//Example: maxProduct ({4, 3, 5}, 2) ==>  return (20)

//My solution:
function maxProduct(numbers, size){
    numbers = numbers.sort((a,b)=> b - a)
    let result = 1
    for(let i = 0; i < size; i++) {
      result *= numbers[i]
    }
    return result
  }