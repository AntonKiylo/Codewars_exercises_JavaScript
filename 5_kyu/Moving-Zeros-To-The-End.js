const moveZeros = arr => {
  let moved = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i - moved] === 0) {
      arr.splice(i - moved, 1)
      arr.push(0);
      moved++;
    }
  }

  return arr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) // => [false,1,1,2,1,3,"a",0,0]