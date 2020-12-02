function list(names){
  const output = []
  names.map(item => output.push(item.name))
  return output.length > 1 ? `${output.splice(0, output.length - 1).join(', ')} & ${output.pop(output.length - 1)}` : output.join('')
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])) // 'Bart, Lisa, Maggie, Homer & Marge'
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])) // 'Bart, Lisa & Maggie'
console.log(list([{name: 'Bart'},{name: 'Lisa'}])) // 'Bart & Lisa'
console.log(list([{name: 'Bart'}])) // 'Bart'
console.log(list([])) // ''