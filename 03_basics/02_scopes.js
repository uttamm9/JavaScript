var c= 322 // globle scope

let a = 450

if(true){ //{} scope (block / local scope)
  let a = 10;
  const b = 20;
  var c = 30 
  // console.log("Inner :", a)
}
// console.log(a) // let is local scope
// console.log(b)  // const is local scope
// console.log(c) // var is globle scope variable

function one(){
  const username = "uttam"

  function two(){
    const website = "github"
    console.log(username)
  }
  // console.log(website) // error
  two()
}

one()

if(true){
  const username = "uttam"
    if(username === "uttam"){
      const website = " github"
      // console.log(username + website)
    }
    // console.log(website) //scope error
}
// console.log(username) // scope error

// +++++++++++++++ = ++++++++++++++++++++++

addone(5) // can acces funtion before declaretion
function addone(num){
  return num+1;
}

const addTwo = function(num){ //addTwo is expresion
  return num + 2;
}
console.log(addTwo(5)) //can't acces funtion before axpresion