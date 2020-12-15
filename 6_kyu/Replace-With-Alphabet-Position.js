function alphabetPosition(str) {
  const input = str.toLowerCase().split('')
  const output = []

  for (let i = 0; i < input.length; i++) {
    if (input[i].match(/^[a-z]+$/)) {
      output.push(input[i].charCodeAt() - 96)
    }
  }

  return output.join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

//  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"