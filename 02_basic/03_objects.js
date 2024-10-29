// two way to declare objects
//1. Literals 
//2. contructure (Singleton) (object.create)

//1. object literals
const mysym = Symbol("key1")// declaretion of symbol

const JsUser = {
  name:"uttam", //name is key and uttam is value
  [mysym]: "mySymbol", // use symbol as a key
  age: 22,
  location: "jaipur",
  email: "uttam@gmail.com",
  isLoggedIN: false
}
// 2 way to acces object values
console.log(JsUser.location);
console.log(JsUser["name"]); // batter way to acces values
// console.log(JsUser.mysym); // error
console.log(JsUser[mysym]); // use symbol as a key

JsUser.email = "sharma@gmail.com" // to overwrite object values

// Object.freeze(JsUser) // now no one can change values in jsUser object
JsUser.email = "hello@gmail.com"// for example
// console.log(JsUser);

JsUser.hello = function(){
  console.log("hello users");
}
JsUser.hii = function(){
  console.log(`hello users, ${this.name}`);
  //this => for refrance same object keys
}
JsUser.hello(); // now we can add methods in object using dot notation  
JsUser.hii();