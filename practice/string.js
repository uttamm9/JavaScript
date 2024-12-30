//write a JS program to ckeck a given string contain 2 to 4 occurance of a specific charecter

const contechars = (str, char) => {
  return str.split('').filter(ch => ch === char).length;
}

const contain2to4 = (str, char) => {
  const count = contechars(str, char);
  return count >= 2 && count <= 4;
}

// console.log(contain2to4('JavaScript', 'a'));

//Q. convert a comma-seprated-value(CSV) string to a 2D array.

const converCSV = (str)=>{
 return str.split('\n').map(row=>row.split(","));
}

let str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;
console.log(converCSV(str))