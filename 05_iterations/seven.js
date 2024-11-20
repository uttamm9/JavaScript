const mynums = [1,4,3,2,5,6,8,9,6,0]

const newnums = mynums.map((num)=>{
  return num+10
})
// console.log(newnums)

// chaning
const chainNums = mynums.map((num)=>{
  return num+10
}).map((num)=>num+5).filter((num)=> num>15)
console.log(chainNums)