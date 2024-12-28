const OBJ_1 = {a:1,b:2,c:3}
const OBJ_2 = {a:1,b:2,c:1}
const OBJ_3 = {a:2,E:2,b:3}

const objectEqual = (a,b)=>{
  
  let isequal = Object.keys(a).every(key =>b[key])
  return isequal;
}
console.log(objectEqual(OBJ_1,OBJ_2))//true
console.log(objectEqual(OBJ_1,OBJ_3))//false
console.log(objectEqual(OBJ_2,OBJ_3))//false