 let score = "23dgt";

 console.log(typeof score)

 let valueInNumber =  Number(score)  //data type conversion
 console.log(typeof valueInNumber)
 console.log(valueInNumber) // NaN means "Not A Number"

// "33" => 33
// "33asd" => NaN
// true => 1, false => 0;

let isLoggendIN = 1; //if enyting is thare the result is true otherwise in empty or 0 is flase;
let booleanIsLoggendIN = Boolean(isLoggendIN)
console.log(booleanIsLoggendIN) // true
// 1=> true;
// 0 => false;
// "" => false;
// "uttam" => true;

let someNumber = 33;
let stringNumber = String(someNumber) //convert to string
console.log(stringNumber) // "33"
console.log(typeof stringNumber)

// **************  Oprations *************

let value = 4;
let negvalue = -value;
console.log(negvalue);

// console.log(2**3);

let str = "hello"
let str2 = " uttam"
let str3 = str+str2
console.log(str3) // "hello uttam"

console.log("1" + 2) // 12 string
console.log(1 + 2) // 3 number
console.log(2 + 3 + "2") // 52

let GameCounter = 100;
GameCounter++;
console.log(GameCounter) // 101