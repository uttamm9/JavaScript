//closest to 100 
const close100 = (a,b)=> (100-a)<(100-b)?a:b

// console.log(close100(30,35))

const countevenNumber = (arr)=>arr.filter(num=>num%2===0).length

console.log(countevenNumber([1,2,3,2,4,3,4,3,5,4,6]))
console.log(countevenNumber([1,2,3,2,4,3,4,3,5,7,7]))

//write a JS program to find the numbers of even values up to a given number

const countEven = (array)=> array.filter(num=>num%2===0).length

const arrayofNumbers = num =>{
  const returnArray = []
  for(let i=1;i<=num;i++){
    returnArray.push(i)
  }
  return returnArray
}
console.log(countEven(arrayofNumbers(12)))