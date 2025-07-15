// This code demonstrates the use of strings in JavaScript, including string literals, template literals, and the String object.
// Declare a string using single quotes
const singleQuoteString = 'Hello, World!';
// Declare a string using double quotes
const doubleQuoteString = "Hello, World!";
// Declare a string using backticks (template literal)
const templateLiteralString = `Hello, World!`;  
// Print the strings to the console
console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateLiteralString);
// Demonstrate the use of template literals for string interpolation
// Template literals allow for multi-line strings and variable interpolation


// Declare variables for name and age
const name = "Akhil";
const age = 24;

// Use template literals to print a sentence
console.log(`${name} is ${age} years old.`);

// Create a string using the String object (with capital "S")
const gameName = new String("Call of Duty");

// Access individual characters using index
console.log("Third character of gameName:", gameName[2]); // Output: 'l'

// Get the length of the string
console.log("Length of gameName:", gameName.length); // Output: 12

// Convert to uppercase
console.log("Uppercase:", gameName.toUpperCase()); // Output: "CALL OF DUTY"

// Convert to lowercase
console.log("Lowercase:", gameName.toLowerCase()); // Output: "call of duty"

// Get character at specific position using charAt()
console.log("Character at index 3:", gameName.charAt(3)); // Output: 'l'

// Access prototype (for learning purposes)
console.log("Prototype of String:", gameName.__proto__);

// Extra: Check if string includes a word
console.log("Includes 'Duty'?", gameName.includes("Duty")); // Output: true

// Extra: Replace a word
console.log("Replace 'Duty' with 'War':", gameName.replace("Duty", "War")); // Output: "Call of War"

// Extra: Split the string into an array of words
console.log("Split into words:", gameName.split(" ")); // Output: ["Call",
// "of", "Duty"]    

// Example of a string with special characters
const specialString = "Hello, \"World\"! It's a beautiful day.\nNew line here.";
// Print the special string
console.log(specialString);

console.log(gameName.trim()); // Output: "Call of Duty" (removes whitespace from both ends)

 



