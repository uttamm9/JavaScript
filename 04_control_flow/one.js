// if statment 

const temprature =  42
// opreters
// >,<,==,=,<=,>=,===,&&,||

if(1 == true){
  console.log("excuted")
}

const score = 200
if(score>100){
  const power = 'fly'
  console.log(`user power: ${power}`)
}

//short hand notesion
// const balance = 50000
// if(balance>3000) console.log("okay"); // don't write this type of code

// if(balance < 3400){
  //   console.log("less than 3400");
  // } else if(balance < 7500 ){
    //   console.log("less thna 7500")
    // } else{
      //   console.log("grater")
      // }
      

  // ternory oprater ( && , || )
  const loggedin = true
  const debitcard = true
  const loggedinfromgoogle =  true;
  const loggedinfromEmail = true

  if(loggedin && debitcard && 2==2){
    console.log("Allow to buy product")
  }

  if(loggedinfromgoogle || loggedinfromEmail){
    console.log("user logged in");
  }

      
      
      