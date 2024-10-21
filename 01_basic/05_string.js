const name = "uttam"
const repocount = 10;
// console.log(name + repocount); string concatinate

// backticks syntax 
console.log(`Hello my name is ${name} and my repocount is ${repocount}`); //string interpolation

const gamename = new String('uttamsharma'); //string is an Object

console.log(gamename);
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase()); //original value didn't change
console.log(gamename.indexOf('t')); //only first charecter show

const newString = gamename.substring(0,4); //Last value not include
console.log(newString);

const anotherString = gamename.slice(-7,6)
console.log((anotherString));

const stringOne = "  uttam   ";
console.log(stringOne.trim()); // trim() remove extra spaces

const url = "https:/uttam.com/uttam%20sharma"
console.log(url.replace("%20", '-')); //replace() remove %20 from url
console.log(url.includes('ravi')) // false ->includes() search across string
console.log(url.split('/')) //split on basses of '/' & convert to array

