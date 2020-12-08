function countPositivesSumNegatives(input) {
  let count = 0
  let sum = 0
  let arr = []
  
  if(input === null || input.length === 0) {
    return arr
  } else {
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        count++
      } else if(input[i] < 0){
        sum -= input[i]
      }
    }  
    arr.unshift(count)
    arr.push(-sum)
  }
  return arr
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]