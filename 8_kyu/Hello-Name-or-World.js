function hello(name) {
  name === undefined || name === "" ? name = "World" : null
  return `Hello, ${name[0].toUpperCase()}${name.toLowerCase().slice(1)}!`
}

console.log(hello("john")) // => "Hello, John!"
console.log(hello("aliCE")) // => "Hello, Alice!"
console.log(hello()) // => "Hello, World!" # name not given
console.log(hello("")) // => "Hello, World!" # name is an empty String