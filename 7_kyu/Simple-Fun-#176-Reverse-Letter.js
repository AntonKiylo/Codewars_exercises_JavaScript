function reverseLetter(str) {
  return str.match(/[a-zA-Z]/g).reverse().join('');
}

console.log(reverseLetter("krishan")) // => "nahsirk"
console.log(reverseLetter("ultr53o?n")) // => "nortlu"

