// const GetFileEctension = (str) =>{
//   let s = str.slice(str.lastIndexOf('.')+1)
//   return s;
// }

const GetFileEctension = (str)=>{
  for (let index = str.length-1; index > 0; index--) {

    if(str[index]==='.'){
        let a = index+1;
        let s = '';
        for (let i = a; i < str.length; i++) {
          s+=str[i]
        }
        return s;
    }
    
  }
  return "No extension"
}

console.log(GetFileEctension('index.html'))