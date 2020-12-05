//Default parameter
//set default value to the parameter
const exponent = (a, b = 2) => a ** b;
console.log(exponent(5)); //25

const greet = (name,greeting = "Hello!") => {
  return `${greeting} ${name}.`;
}
console.log(greet("James")); //Hello! James.

//Spread operator(function)
//expand iterable array to a single element 
const nums = [ 20, 15, 5, 9 ];
const multiplyNums = (a,b,c,d) => {
  return a * b * c * d;
}
console.log(multiplyNums(...nums));//13500

const max = Math.max(...nums);
console.log(max); //20
