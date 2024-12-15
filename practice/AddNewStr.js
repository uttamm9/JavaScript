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