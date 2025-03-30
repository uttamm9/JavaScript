
// const equalTo100 = (a,b) => a===100 || b===10 || (a+b)===100

// console.log(equalTo100(100,0))
// console.log(equalTo100(100,100))
// console.log(equalTo100(50,50))

// const halfstr =  (str)=> str.slice(0,str.length/2)

// console.log(halfstr('raja'))
// console.log(halfstr('abcde'))
// console.log(halfstr('abcdef'))

let n = 5;
// let p='';
for (let i = 1; i <= n; i++) {
  let p = '';
  for (let s = 1; s <= n - i; s++) {
    p += ' ';
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    p += '*';
  }
  console.log(p);
}

