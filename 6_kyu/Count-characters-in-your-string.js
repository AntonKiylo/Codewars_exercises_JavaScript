function count (string) {  
  let obj = {}
  
  for(let i = 0; i < string.length; i++){
    if(string[i] in obj){
      obj[string[i]]++
    } else {
      obj[string[i]] = 1
    }
  }
  
  return obj;
}