const tinderUser = new Object() // singleton object
// const tinderUser = {}// non singleton object

tinderUser.id = "12fwef"
tinderUser.name = "uttamm"
tinderUser.isLOggendin = false;
// console.log(tinderUser);

const regularUser = {
  email: "someone@gmial.com",
  fullname: {
    first: "John",
    last: "Doe"
  }
}   
// console.log(regularUser.fullname.first); // john

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = Object.assign({},obj1,obj2) //{}(enpty peranthis) is Target remain are source

const obj4 = {...obj1,...obj2} //...(spred oprater)   
// console.log(obj4);

console.log(tinderUser);

console.log(Object.keys(tinderUser));//get all keys in an Array
console.log(Object.values(tinderUser));//get all values in an Array


const course = {
  coursename: "JS in Hindi",
  price: "999",
  courseInstructor: "uttam"   
}

// const {courseInstructor} = course
// console.log(courseInstructor); //uttam
const{courseInstructor: Instrutor} = course //Object Destucturin
console.log(Instrutor); //uttam

// { // JSON file formate use for API fatching
//   "name": "uttam",
//   "coursename": "js in Hinid",
//   "price": 3453
// }
