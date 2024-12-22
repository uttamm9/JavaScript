//write a JS program to ckeck a given string contain 2 to 4 occurance of a specific charecter

const contechars = (str, char) => {
  return str.split('').filter(ch => ch === char).length;
}

const contain2to4 = (str, char) => {
  const count = contechars(str, char);
  return count >= 2 && count <= 4;
}

console.log(contain2to4('JavaScript', 'a'));