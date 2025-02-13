//A promiss in JS is like a guarantee that somthing will happen in future. it is used for tasks that take time, Like loading data from internate.

//Creating a Promise
const myPromise  = new Promise((resolve,reject)=>{
   setTimeout(() => {
    let success = 1;
    if (success) {
      resolve("opration seccessful")
    } else {
      reject("opration faild")
    }
  }, 2000);
})

//Consuming a Promise
myPromise.then((data)=>{
  console.log(data) // oprationi successful
}).catch((error)=>{
  console.log(error) // opration faild
})

//Promise.all ->for all true
const promise1 = new Promise(resolve=>setTimeout(()=> resolve("promise 1 complete"), 2000));
const promise2 = new Promise(resolve=>setTimeout(()=> resolve("promise 2 complete"), 2000));
const promise3 = new Promise(resolve=>setTimeout(()=> resolve("promise 3 complete"), 2000));

Promise.all([promise1,promise2,promise3])
.then(result=>console.log(result))
.catch(error=>console.log(error))

//Promise.all -> for false
const promiseA = new Promise(resolve => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise((_, reject) => setTimeout(() => reject("Promise B failed"), 2000));
const promiseC = new Promise(resolve => setTimeout(() => resolve("Promise C resolved"), 3000));

Promise.all([promiseA, promiseB, promiseC])
    .then(results => console.log(results))
    .catch(error => console.log(error)); // "Promise B failed"
