// const coding = ["JS","ruby","C++","python","java"]

// const values = coding.forEach((items)=>{ //ForEach dont return values
//   console.log(items)
// })

// console.log(values)

const myNums =[1,4,3,25,6,7,4,9,8]

// const newnums = myNums.filter((num)=>{
//   return num>4
// }) //return value greater than 4
// console.log(newnums)

// const newnums = []
// myNums.forEach((num)=>{ // push values from forEach loop
//   if(num>4){
//     newnums.push(num)
//     }
// })
// console.log(newnums)

const books = [ { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
   {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 }, 
   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }, 
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 }, 
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 }, 
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }, 
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }, 
   { title: 'Book Eight', genre: 'Science', publish: 2011, editinn: 2016 }
]

const userBook = books.filter((bk)=>{
  return bk.genre === 'Non-Fiction'
})
// console.log(userBook)

const bookyear = books.filter((bk)=>{
  return bk.publish > 1990 && bk.genre === 'History' // both condition must bee true
})
console.log(bookyear)