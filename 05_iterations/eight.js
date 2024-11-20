const myNums = [1,3,2,4,6,5,7,9,8]

//reguler function
// const myTotal = myNums.reduce(function(acc,currentVal){
//   console.log(`current value ${currentVal} and accumuleter vlaue ${acc}`)
//     return acc+currentVal
// },0)
// console.log(myTotal)

//Arrow function

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
// console.log(myTotal)

const shoppingCart = [
  {
    itemName:"laptop",
    price:125000
  },
  {
    itemName:"mouse",
    price:5000
  },
  {
    itemName:"keyboard",
    price:8000
  },
  {
    itemName:"headphone",
    price:7000
  }
]

const totalPrice = shoppingCart.reduce((acc,item)=> {

  return acc + item.price
},0)
console.log(totalPrice)