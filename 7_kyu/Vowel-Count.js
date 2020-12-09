function getCount(str) {
  let vowelsCount = 0;
  
  str.split('').forEach(item => {
    if (item.match(/[aeiou]/ig)){
      vowelsCount++
    }
  })
  
  return vowelsCount;
}

console.log(getCount('Hello World!'))