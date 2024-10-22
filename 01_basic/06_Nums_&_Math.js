const score = 100;
// console.log(score);

const balance = new Number(150)
// console.log(balance);
// console.log(balance.toFixed(2)); // 150.00 => mostly use in ecommers and payment application

const otherNumber = 321.3466;
// console.log(otherNumber.toPrecision(5));//321.35 =>return 5 digit remianing convert into roundoff

const Hundreds = 10000000
// console.log(Hundreds.toLocaleString());// 1,00,00,000 for readeblity 


// +++++++++++ Maths +++++++++++++
// MAths libary comes with Javascript by default

// console.log(Math); //Objact {Math} {} 
// console.log(Math.round(4.4)); //nearest Number 4
// console.log(Math.ceil(4.4)); //ceiling number 5
// console.log(Math.floor(4.8)); //floor  value 4 

console.log(Math.random()); //ganrate random number int 0 to 1
console.log((Math.random()*10) + 1); // Gauranted greater than 1

// Q. ganrate value 10 to 20;
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
