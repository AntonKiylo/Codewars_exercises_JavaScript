function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError();
  } else if (n === 0) {
    return 1;
  } else {
    return (n * factorial(n - 1));
  }
}

console.log(factorial(0)) // ==> 1
console.log(factorial(1)) // ==> 1
console.log(factorial(2)) // ==> 2
console.log(factorial(3)) // ==> 6