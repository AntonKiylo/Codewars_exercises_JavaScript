function isIsogram(str){
  return str.toLowerCase().split('').filter((item, index, arr) => arr.indexOf(item) === index).length === str.length;
}

console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("aba"))// false
console.log(isIsogram("moOse"))// false