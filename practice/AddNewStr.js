//Add 'new!' at starting
const addstr = (str)=>{
  let n = str.substring(0,4);
  if(n === 'new!'){
    
    return str;
  }
  let a = 'new!'
  return a+=str;
}
console.log(addstr("hello bro"))

//add two sting except their first charecter
const concatenate = (str1,str2) => {
  return str1.slice(1)+str2.slice(1)
}
console.log(concatenate('abc','dfe'))
console.log(concatenate('software','devloper'))