function bubblesortOnce(a) {
  for (let n = 0; n < a.length; n++) {
    for (let i = 0; i < a.length - 1 - n; i++) {
      if (a[i] > a[i + 1]) {
        const buff = a[i]
        a[i] = a[i + 1]
        a[i + 1] = buff
      }
    }
  }

  return a
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])) // [7, 5, 3, 1, 2, 4, 6, 8, 9]