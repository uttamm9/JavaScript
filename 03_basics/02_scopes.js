var c= 322 // globle scope

let a = 450

if(true){ //{} scope (block / local scope)
  let a = 10;
  const b = 20;
  var c = 30 
  console.log(a)
}
console.log(a) // let is local scope
// console.log(b)  // const is local scope
console.log(c) // var is globle scope variable
