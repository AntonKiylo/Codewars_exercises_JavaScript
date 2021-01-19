function isPalindrome(line) {
  return line.toString().split('').reverse().join('') === line.toString()
}

console.log(isPalindrome("anna"))   // ==> true
console.log(isPalindrome("walter")) // ==> false
console.log(isPalindrome(12321))    // ==> true
console.log(isPalindrome(123456))   // ==> false