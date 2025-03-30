// Arrays

const myArray = [0,1,2,3,4,5]
const myHeros = ["shaktiman","hatim","nagraj"]
const myArra2 = new Array(1,2,3,4,5)

// console.log(myArray[1]) // 1 => zero indexing

//array methods

// myArray.push(8) // add new values in last
console.log("A" ,myArray);
// myArray.pop()//remove last value
// console.log(myArray);

myArray.unshift(7); // Add value at 0th index & shift other values
// console.log(myArray); 
myArray.shift() // remove first index value

// console.log(myArray.includes(8)); // return false or true
// console.log(myArray.indexOf(3)); // 3 index value return

const newArr = myArray.join()
// console.log(newArr); // convert array to string

const mySlice = myArray.slice(1,3);
// console.log(mySlice); // return array from 1 to 2 index value

// console.log("B", myArray); // original array remain same
const mySplice = myArray.splice(1,3);
// console.log(mySplice); // return array from 1 to 3 index value

// console.log("C", myArray); // original array change

const arr = [2,3,1,5,4,2,6];
arr.splice(3,1);
// console.log(arr)
const arr2 = arr.map((item) => {
  return item;
})
// console.log(arr2)

let evennum = arr.filter((num)=>{
  return num%2==0;
})
// console.log(evennum)

let reduc = arr.reduce((total,num)=>{
    return total+num;
})
// console.log(reduc)

let findnum = arr.find((num) => {
  return num.toString().startsWith('4');
});
// console.log(findnum);

// console.log(arr2.includes(6))