function factorial(n){
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(0)) // ==> 1
console.log(factorial(1)) // ==> 1
console.log(factorial(2)) // ==> 2
console.log(factorial(3)) // ==> 6