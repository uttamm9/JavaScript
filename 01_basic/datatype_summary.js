//  2 Type of datatype 

//1.  primitive 
// 7 primitive => string, number, boolean, null, undefined, symbol, Bigint

  const id = Symbol('1234')
  const anotherid = Symbol('1234')
  console.log(typeof id);//symbol
  
  console.log(id===anotherid); //false  -> return value is different
  
  const Bignumber = 5432554464643609642n
  console.log(typeof Bignumber); //bigInt

// 2. Non primitive (Reference)
//    Array, Objects, Funtions

const heros = ["Shaktiman", "Naagraj", "Doga"]; //array Object
console.log(typeof heros); //object

let myObj = {
  name: "uttam",
  age: 25,
}
console.log(typeof myObj); //object

const myFuntion = function(){
  console.log("hello world");
}
myFuntion()
console.log(typeof myFuntion); //funtion


// ++++++++++++++++++++++++++++++++++++
// Memory
// Stack (premitive), Heap (Non-Premitive)

// stack memory (copy value)
let myname = "Uttam"
let anothername = myname
anothername = "sharma"
console.log(myname,anothername);

//Heap memory (refrance of value) update in original value
let userOne = {
  emial: "uttam@gmail.com",
  pass: "utaam123"
}
let userTwo = userOne
userTwo.emial = "sharma@gmail.com"
console.log(userOne.emial);
console.log(userTwo.emial);


