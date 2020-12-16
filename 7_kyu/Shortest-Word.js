function findShort(s){
  const arr = s.split(' ');
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}