// Immediately Invoked Function Expressions (IIFE)

// Immediately Invoked Function Expressions (IIFE) are functions that are defined and called immediately.

(function chai(){ //name iife
  console.log("hello bro")
})(); // first () is  whare we write function defination 
    //  second () if function excution call
// for avoid globle scope variable or poluction we use ()

//Always use ; (semicolen)
( (name) =>  { //name is perameter
  // simple iife
  console.log(`${name} take coffee`)
})('uttam'); //uttam is argument