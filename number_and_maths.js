// number and maths utilities
/*
const score = 300
console.log (score); // Output: 300

const balance = new Number(106826482);



console.log (balance.toString().length); // Output: 9

console.log (balance.toFixed(2)); 

const otherNumber = 123.7584
console.log (otherNumber.toPrecision(4)); // Output: 123.758



const hundreds = 1000000
console.log (hundreds.toLocaleString()); // Output: 1,000,000
console.log (hundreds.toLocaleString('en-IN')); // Output: 10,00,000

*/ 


//++++++++++++++++++++Maths++++++++++++++++++++

/* 
console.log(Math); // Output: Math object with various properties and methods

console.log(Math.abs(-19)); // Output: 19 // Returns absolute value
console.log(Math.ceil(4.1)); // Output: 5// Rounds up to nearest integer
console.log(Math.floor(4.9)); // Output: 4 // Rounds down to nearest integer
console.log(Math.round(4.5)); // Output: 5 // Rounds to nearest integer
console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1 // Returns minimum value

console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5 // Returns maximum value
*/

console.log(Math.random()); // Output: Random number between 0 and 1    
console.log(Math.random() * 10); // Output: Random number between 0 and 10
console.log(Math.random() * 100); // Output: Random number between 0 and 100

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random number between 10 and 20
