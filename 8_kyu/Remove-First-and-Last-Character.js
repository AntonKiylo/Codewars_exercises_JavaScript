function removeChar(str) {
  let output = str.split('')
  output.pop()
  output.shift()
  return output.join('')
}