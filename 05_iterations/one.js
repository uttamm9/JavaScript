// for loop

for(let i = 0; i<10; i++ ){
  const element = i;
  
  if(element == 5){
    console.log("5 number arive")
  }
  console.log(element);

}

for (let i = 0; i <=10; i++) {
  // console.log(`outer loop value ${i}`)
  for (let j = 0; j < 10; j++) {
    // console.log(`inner loop value ${j} and outerloop value ${i}`)
    
  }
}
  
let myArray = ["man","woman","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element)
}

// break & continue
for (let index = 1; index <= 20; index++) {
  if(index == 9){
    console.log(`get number ${index}`)
    break;
  }
  console.log(`value is ${index}`)
}
for (let index = 1; index <= 20; index++) {
  if(index == 9){
    console.log(`skip print  ${index}`)
    continue;
  }
    console.log(`value is ${index}`)
}
