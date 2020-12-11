function maskify(cc) {
  let arr = cc.split('')
  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = '#'
  }
  return arr.join('')
}

console.log(maskify('4556364607935616')) // => '############5616'
console.log(maskify('1')) // => '1'
console.log(maskify('11111')) // => '#1111'