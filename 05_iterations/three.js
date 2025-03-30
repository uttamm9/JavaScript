// for of

const arr =[1,2,3,4,3,26,6]

// for (const num of arr) { 
//   console.log(num)
// }

const str = "hello world"

// for (const character of str) {
//   console.log(`Each char is ${character}`)
// }

// for of loop is used for iterating over arrays and strings and sets and maps and sets and maps

// Maps => map hold unique key with pair
const map = new Map()
map.set('IN',"India")
map.set('US',"USA")
map.set('UK',"United Kingdom")

console.log(map)
for (const [key,value] of map) { //destucture of array
  console.log(key, '->', value)
}

const myObject = {
  'name': 'uttam',
  'age': 25,
}
for (const [key, value] of Object.entries(myObject)) {
  console.log(key, '->', value); // Fixed
}
