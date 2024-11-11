
const user = {
  name: "uttam",
  price: 500,

  welcomemsg: function(){
    console.log(`${this.name}`, "welcome to website")
    console.log(this)
    // this means current values in this object
  }
}

// user.welcomemsg()
// user.name = "sharma"
// user.welcomemsg()

// console.log(this) // {}  empty object

function hello() {
      let username = "uttam"
      // console.log(this.username) // undefined couse this only work in objects
}
// hello()

const hii = function(){
  let username = "sharma"
  console.log(this.username) //undefined
}
// hii()

// const hii = () => {
//     let username = "sharma"
//     console.log(this.username) //undefined
//   }
//   hii()

// const addtwo = (num1, num2) => {
//   return num1+num2
// }
// const addtwo = (num1, num2) => num1+num2 //for one line statment (implishit return)
// const addtwo = (num1, num2) => (num1+num2) //mostly use in react 
const addtwo = (num1, num2) => (  {user:"uttam"} ) //{ user: 'uttam' }

console.log(addtwo(3,5)) // 8