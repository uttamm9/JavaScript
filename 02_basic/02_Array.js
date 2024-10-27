const Marval_Heros = ["Thor", "IronMan","Spiderman"]
const DC_Heros = ["Superman","Batman","Flash"]

// Marval_Heros.push(DC_Heros); // whole array will be push as an array
// console.log(Marval_Heros);
// console.log(Marval_Heros[3]); 

// const all_heros = Marval_Heros.concat(DC_Heros) //only array's element are push
// console.log(all_heros);

const all_new_heros = [...Marval_Heros, ...DC_Heros] //...sprade oprater
//arrays indisual element store in all_new_heros and more array store
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
const real_array = another_array.flat(Infinity); // infinity for all depth
//flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth(1 or 2 or 3 ...). 
console.log(real_array);

console.log(Array.from("Uttam"));//from =>convert anything into array eccept {}

let score1 = 50
let score2 = 60
let score3 = 80
console.log(Array.of(score1,score2,score3));
//Array,of =>Returns a new array from a set of elements

