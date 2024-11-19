const coding = ["js","ruby","cpp","py","java"]

// coding.forEach( function (item) {
//   console.log(item)
// })
// OR
// coding.forEach( (item) =>{
//   console.log(item)
// })
//OR
// function printme(item){
//   console.log(item)
// }
// coding.forEach(printme)


// coding.forEach( (item,index,array) =>{
// console.log(item,index,array)
// })

const myCoding = [
  {
    name: "javascript",
    file: ".js"
  },
  {
    name: "java",
    file: ".js"
  },
  {
    name: "c++",
    file: ".cpp"
  },
]
myCoding.forEach( (item) =>{
  console.log(item.name)
})