
// const equalTo100 = (a,b) => a===100 || b===10 || (a+b)===100

// console.log(equalTo100(100,0))
// console.log(equalTo100(100,100))
// console.log(equalTo100(50,50))

// const halfstr =  (str)=> str.slice(0,str.length/2)

// console.log(halfstr('raja'))
// console.log(halfstr('abcde'))
// console.log(halfstr('abcdef'))

// let n = 7;
// // let p=''
// for (let i = 1; i <= n; i++) {
//   let p = '';
//   for (let s = 1; s <= n - i; s++) {
//     p += ' ';
//   }
//   for (let j = 1; j <= i * 2 - 1; j++) {
//     p += '*';
//   }
//   console.log(p);
// }

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(10, 5);
console.log("Area:", rect.getArea());
console.log("Perimeter:", rect.getPerimeter());

