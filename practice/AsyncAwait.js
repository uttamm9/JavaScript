//async/await is a way to handle promises in JS more easily and readably than     
// .than() and .catch() 

//why use
//1. make asyncronouss code look like raguler code
//2. easier to read and write than .than() & .catch() chains.
//3. Help to avoid callback hell
async function print() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
print()