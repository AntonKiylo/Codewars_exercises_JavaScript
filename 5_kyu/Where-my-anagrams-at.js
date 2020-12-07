function anagrams(word, words) {
  let output = []

  words.forEach(elem => {
    if (elem.split('').sort().join('') === word.split('').sort().join('')) {
      output.push(elem)
    }
  });

  return output
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) // []