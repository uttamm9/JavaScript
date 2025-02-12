//functions
//  function F_name(){    //function syntax

//  }

function Name(){
  console.log("uttam");
  console.log("sharma");
}

// Name() // only "Name" is refrance and Name() is excution
// function AddNumbers(num1,num2){ //num1 & num2 are Perameters
// console.log(num1+num2)
// }

// AddNumbers(3,6) //3,6 is Arguments
// const result = AddNumbers(3,6) //
// console.log(result) // undefined

function AddNumbers(num1,num2){ //num1 & num2 are Perameters
    // let result = num1+num2
    // return result;
    return (num1+num2)
}
const result = AddNumbers(4,9)
// console.log(result);

function loginMsg(username){//to avoid flase use username = "anything"
  if(username === undefined){ // also use !username
    console.log("please enter a name");
    return
  }
  return `${username} just logged in`
}
// console.log(loginMsg());

function claculateCartPrice(...num){ // ...rest (sprade) oprater
  return num //reutn an Array
}
// console.log(claculateCartPrice(453,500,355,700)); // An Array

const user = {
  username: "uttam",
  Id: "u999"
}
function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and userid is ${anyObject.Id}`);
}

handleObject(user)

const newarray = [234,64,3221,675,34]
function secondvalue(getArray){
    return getArray[1]
}
console.log(secondvalue(newarray));

// callback funtion 
// A function that takes another function (callback) as a parameter
const fatchData = (callback)=>{
  console.log('fatching data....')
  // Simulating data fetched after 2 seconds
  setTimeout(() => {
    const data = "your data is here";
    callback(data) // The callback is called with the data
  }, 2000);
}

// A callback function that gets executed after the data is fetched
const displayData = (data)=>{
  console.log(data) // This prints: "Here is your data!"
}

// Calling the fetchData function and passing displayData as the callback
fatchData(displayData)
