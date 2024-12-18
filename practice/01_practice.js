
const equalTo100 = (a,b) => a===100 || b===10 || (a+b)===100

console.log(equalTo100(100,0))
console.log(equalTo100(100,100))
console.log(equalTo100(50,50))

const halfstr =  (str)=> str.slice(0,str.length/2)

console.log(halfstr('raja'))
console.log(halfstr('abcde'))
console.log(halfstr('abcdef'))