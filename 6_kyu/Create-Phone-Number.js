function createPhoneNumber(numbers){
  return `(${numbers.splice(0, 3).join("")}) ${numbers.splice(0, 3).join("")}-${numbers.join("")}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"