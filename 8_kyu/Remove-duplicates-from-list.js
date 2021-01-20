function distinct(a) {
  return a.filter((item, i) => a.indexOf(item) === i);
}

console.log(distinct([1]));    //  ==> [1]
console.log(distinct([1,2]));  //  ==> [1,2]
console.log(distinct([1,1,2]));  //  ==> [1,2]