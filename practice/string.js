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
// console.log(converCSV(str))


//Q. rearange string to alphabetical order
const alphabeticalOrder = (str)=>{
  str = str.toLowerCase()
  let a = str.split('')
  let b = a.sort((a,b)=>a>b ? 1 : -1).join('')
  return b;
}
// console.log(alphabeticalOrder('webmaster'))
// console.log(alphabeticalOrder('jawaScript'))


//Q. write a JS fnx that accept a string as a parameter and count the number of vowels within the string
const countlatters = (str)=>{
  let latterArray = ['a','e','i','o','u'];
  let arr = str.split('')
  let count = arr.filter(s=>latterArray.indexOf(s)>-1).length
  return count
}
// console.log(countlatters('abcde'))
// console.log(countlatters('about'))


// Q. write a JS program to extract unique chareters from a string.
  const getUniqueChar = (str)=>{
    let newarr = str.split('')
    return newarr.filter((item,index,arr)=>{
      return arr.slice(index+1).indexOf(item)===-1
    });
  }
  const seondWay = (str)=>{
    // return new Set(str.split('')) //get in set
    return [...new Set(str.split(''))] //get in array formate
  }
  console.log(getUniqueChar('aaavvvffffdddd'))
  console.log(seondWay('wwwddffvwddc'))

  //Q. write a JS program to find first non-repeating charecter.

  const firstNonRepeatingChar = (str)=>{
    let arr = str.split('')
    let result = arr.filter((item,index,arr)=>{
      return arr.indexOf(item)===arr.lastIndexOf(item)
    })
    return result[0]
  }
  console.log(firstNonRepeatingChar('abacddbec')) //e
  console.log(firstNonRepeatingChar('abcab')) //c