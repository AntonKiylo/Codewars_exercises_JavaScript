const pigIt = str => {
  const newStr = str.split(" ").map(item => {
    return item.match(/[,.!?;:()]/) ? item : `${item.split("").splice(1).join("")}${item[0]}ay`
  });

  return newStr.join(" ")
}

console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'))     // elloHay orldway !