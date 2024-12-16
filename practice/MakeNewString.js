const newStr = (str)=>{
  if(str.length<=3){
    return str;
  }
  let S1 = str.slice(0,3);
  let S2 = str.slice(-3); //last 3 charecters
  return (S1+S2)
}
console.log(newStr('A1223DF'))