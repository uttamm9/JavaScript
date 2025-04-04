const OBJ_1 = {a:1,b:2,c:3}
const OBJ_2 = {a:1,b:2,c:1}
const OBJ_3 = {a:2,E:2,b:3}

const objectEqual = (a,b)=>{
  
  let isequal = Object.keys(a).every(key =>b[key])
  return isequal;
}
console.log(objectEqual(OBJ_1,OBJ_2))//true
console.log(objectEqual(OBJ_1,OBJ_3))//false
console.log(objectEqual(OBJ_2,OBJ_3))//false

//Q. convert array of objects.
  const array = ['a','b','c']

  let obj = array.reduce((a,cur,i)=>({...a,[i]:cur}),{})
  console.log(obj)//{a: 0, b: 1, c: 2}

//Q. convert object to array
  const obj1 = {a:1,b:2,c:3}

  let array1 = Object.keys(obj).map(key=>obj[key])
  console.log(array)//[1,2,3]

//Q. 
console.log(3 + true) //4
console.log(true + 3) //4

// console.log('5' + 3) //53
// console.log(3 + '5') //35
// console.log(3 - - '5')//8
// console.log('5' + + 5)//55

const objt = {a:'JS'}
const {a,a:b,a:c} = objt;
console.log(a,b,c) // JS JS JS
