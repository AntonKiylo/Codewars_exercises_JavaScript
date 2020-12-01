const menFromBoys = (arr) => {
  const evenArr = []
  const oddArr = []
  
  arr.map(int => {
    if(int % 2 === 0){
      evenArr.push(int)
    } else {
      oddArr.push(int)
    }
  })
  
  const evenOut = evenArr.filter((item, index) => evenArr.indexOf(item) === index).sort((a, b) => a - b)
  const oddOut = oddArr.filter((item, index) => oddArr.indexOf(item) === index).sort((a, b) => b - a)
  
  return evenOut.concat(oddOut)
}

console.log(menFromBoys([2,15,17,15,2,10,10,17,1,1])) // [2,10,17,15,1]
console.log(menFromBoys([-32,-39,-35,-41])) // [-32,-35,-39,-41]
console.log(menFromBoys([-64,-71,-63,-66,-65])) // [-66,-64,-63,-65,-71]
console.log(menFromBoys([-94,-99,-100,-99,-96,-99])) // [-100,-96,-94,-99]
console.log(menFromBoys([-53,-26,-53,-27,-49,-51,-14])) // [-26,-14,-27,-49,-51,-53]