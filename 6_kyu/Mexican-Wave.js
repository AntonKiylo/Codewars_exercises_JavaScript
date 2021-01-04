function wave(input){
  const output = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
      let arr = input.split('')
      let removedArr = arr.splice(i, 1, input[i].toUpperCase())
      output.push(arr.join(''))  
    }
  }
  return output
}

console.log(wave("hello")) // result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("codewars")) // result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("")) // result = [];
console.log(wave("two words")) // result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave(" gap ")) // result = [" Gap ", " gAp ", " gaP "];