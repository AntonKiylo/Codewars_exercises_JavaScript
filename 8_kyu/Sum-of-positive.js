function positiveSum(arr) {
  return arr.length > 0 ? arr.filter(item => item > 0).reduce((acc, curr) => {return acc + curr}, 0) : 0
}