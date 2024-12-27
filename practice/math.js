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
// console.log(countEven(arrayofNumbers(12)))

//write a JS program to check whether a given array is sorter in ascending order
const checkArray = (num)=>{
  for(let i=1;i<num.length;i++){
    if(num[i]<num[i-1]){
      return false;
    }
  }
  return true
}
// console.log(checkArray([3,4,3,4,5,6]))

//given year is leap or not;
const isleap = (year)=>{
  if((year%4===0 && year%100!=0) || year%400===0){
    return true;
  }
  else{
    return false
  }
}
console.log(isleap(2024))
console.log(isleap(2022))