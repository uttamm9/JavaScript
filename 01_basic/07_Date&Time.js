// Dates
let myDate = new Date()
// console.log(myDate); //2024-10-22T17:31:43.581Z
// console.log(myDate.toString()); //Tue Oct 22 2024 23:03:41 GMT+0530 (IST)
// console.log(myDate.toDateString()); //Tue Oct 22 2024
// console.log(myDate.toLocaleString()); //22/10/2024, 11:10:30 pm
// console.log(typeof myDate); //object

let myCreatedDate = new Date(2024, 8, 12)// month start with 0 to 11
// console.log(myCreatedDate.toDateString()); // Fri Sep 12 2024

let anotherDate = new Date("01-04-2024") 
console.log(anotherDate.toLocaleString()); //4/1/2024, 12:00:00 am (dd/mm/yyyy)

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1663831234567 MiliSecond value
// console.log(myCreatedDate.getTime()); // use for campare time

console.log(Math.floor(myTimeStamp/1000)); //divide by 1000 to convert in seconds

let newDate = new Date()
console.log(newDate.getMonth()+1); //+1 becouse month start with 0
console.log(newDate.getDay()); // 1 for monday

console.log(newDate.toLocaleString(`Default`,  
  {timeZone: 'Asia/Kolkata',
    weekday: "long",
    day: "2-digit"
  })); // use for get time zone






