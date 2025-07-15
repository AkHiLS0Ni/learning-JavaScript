// Primitive data types

// 7 ttupe ; string, nuber, boolean, null, undefined, symbol, bigint


const score = 100; // number
const name = "John"; // string
const IsloggedIn = true; // boolean
const user = null; // null
let userEmail; // undefined

const id = symbol ('123'); // symbol
const anotherId = Symbol('123'); // symbol

console.loglog (id === anotherId); // false

const bigNuber = 12345678901234567890n; // bigint
console.log(bigNuber); // 12345678901234567890n



// Reference data types (non-primitive data types)

// 3 type ; object, function, array


const heros = ["Thor", "Ironman", "Hulk"]; // array
let myObj = {
    name: "John",
    age: 30,
    isActive: true
}; // object 

function myFunction(){ 
    console.log ("Hello World");
} // function

// Example of a function that returns an object

console.log(typeof score); // number

console.log(typeof myFunction); // function
console.log(typeof heros); // object    
console.log(typeof myObj); // object