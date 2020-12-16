const reverseSeq = n => {
  const output = []
  for (let i = n; i > 0; i--) {
    output.push(i)
  }
  return output
}

console.log(reverseSeq(6))