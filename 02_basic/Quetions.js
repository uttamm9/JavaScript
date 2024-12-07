let str = "hare ram hare ram hare krishna hare krishna";

let obj = {}

for(s of str){
  if(obj[s]){
    obj[s]+=1;
  }
  else{
    obj[s]=1;
  }
}
console.log(obj)