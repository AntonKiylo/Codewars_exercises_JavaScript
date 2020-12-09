function disemvowel(str) {
  return str.split("").filter(item => !item.match(/[aeiou]/ig)).join("")
}

console.log(disemvowel('This website is for losers LOL!')) // "Ths wbst s fr lsrs LL!"