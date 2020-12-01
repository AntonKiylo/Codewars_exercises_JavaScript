const towerBuilder = nFloors => {
  const tower = []

  for(let i = 0; i < nFloors; i++){
    tower.push(" ".repeat(nFloors - i - 1) + "*".repeat((i * 2)+ 1) + " ".repeat(nFloors - i - 1))
  }
  
  return tower
}

console.log(towerBuilder(3))
console.log(towerBuilder(6))
console.log(towerBuilder(9))