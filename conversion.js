let score = "44"

console.log (typeof score); // "string"
console.log(typeof(score)); // "string"

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // "number"
console.log(valueInNumber); // 44

// "33abc" is not a valid number
// true =>1; // false => 0
//"44" => 44 



let isLoggedIn = true;// isLoggedIn = false; // true => 1; false => 0
console.log(typeof isLoggedIn); // "boolean"
console.log(isLoggedIn); // true    




let isLoggendIn = 1// isLoggedIn = 0; // true => 1; false => 0

let booleanIsLoggedIn = Boolean(isLoggendIn);
console.log(typeof booleanIsLoggedIn); // "boolean"




let SomeNumber = 55;

let stringNumber = String(SomeNumber);
console.log(typeof stringNumber); // "string"   
console.log(stringNumber); // "55"



// *************************OPERATIONS*****************************************************************************************************************//

let value = 3 
let negValue = -value; // negation
console.log(negValue); // -3

/*
console.log(3 + 4); // 7
console.log(3 - 4); // -1   
console.log(3 * 4); // 12
console.log(3 / 4); // 0.75
console.log(3 % 4); // 3 (remainder of 3 divided by 4)
console.log(3 ** 4); // 81 (3 raised to the power of 4) 
console.log(3 + 4 * 2); // 11 (multiplication before addition)
console.log((3 + 4) * 2); // 14 (addition before multiplication)
console.log(3 + 4 - 2); // 5 (addition and subtraction)
console.log(3 * 4 / 2); // 6 (multiplication and division)
console.log(3 + 4 * 2 - 1); // 10 (combination of operations)
console.log(3 * (4 + 2)); // 18 (parentheses change the order of operations)
console.log(3 + 4 * (2 - 1)); // 7 (parent                     heses change the order of operations)
console.log(3 * 4 + 2); // 14 (multiplication before addition)
console.log(3 + 4 - 2 * 1); // 5 (addition and subtraction with multiplication)
console.log(3 / 4 + 2); // 2.75 (division before addition)
console.log(3 * 4 - 2); // 10 (multiplication before subtraction)
console.log(3 + 4 / 2); // 5 (addition before division)
*/




let str1= "Hello";
let str2 = " World";
let str3 = str1 + str2; // Concatenation
console.log(str3); // "Hello World"


console.log("1" + 2 ); // "12" (string concatenation)
console.log(1 + "2"); // "12" (string concatenation)
console.log("1" + 2 + 3); // "123" (string concatenation)
console.log(1 + 2 + "3"); // "33" (number addition before string concatenation)
console.log("1" + (2 + 3)); // "15" (string concatenation with parentheses)
console.log(1 + 2 + 3 + "4"); // "10" (number addition before string concatenation)
console.log("1" + 2 + 3 + 4); // "1234" (string concatenation)
console.log(1 + "2" + 3 + 4); // "1234" (string concatenation)
console.log(1 + 2 + "3" + 4); // "1234" (number addition before string concatenation)
console.log("1" + 2 + "3" + 4); // "1234" (string concatenation)
console.log(1 + 2 + 3 + "4" + 5); // "10" (number addition before string concatenation)

//Postfix increment

let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.



//Prefix increment 

let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.


