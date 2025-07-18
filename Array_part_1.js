// Array


const myArray = [1, 2, 3, 4, 5];
const myHero =["superman", "batman", "spiderman", "ironman"];

const myArr2 = new Array(1, 2, 3, 4, 5);
//console.log(myArray[1]); // Output: 2
//console.log(myHero[2]); // Output: spiderman
//console.log(myArr2[3]); // Output: 4

// Array methods

 //myArray.push(6); // Adds 6 to the end of the array
 //console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]
   // myHero.pop(); // Removes the last element (ironman)
    //console.log(myHero); // Output: ["superman", "batman", "spiderman"]

//myArray.unshift(0); // Adds 0 to the beginning of the array
//console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]
//myHero.shift(); // Removes the first element (superman)
//console.log(myHero); // Output: ["batman", "spiderman", "ironman


//console.log(myArray.includes(3)); // Output: true

//console.log(myHero.indexOf("batman")); // Output: 1

//const newArr = myArray.join()

//console.log(newArr); // Output: "1,2,3,4,5"
//console,log(typeof newArr); // Output: string


// slice, splice

//console.log("A", myArray);

//const myn1 = myArray.slice(1, 3); // Extracts elements from index 1 to 2 

//console.log(myn1); // Output: [2, 3]
//console.log("B", myArray); // Original array remains unchanged  






//=================splice========================


const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]






// ++++++++++++++++++++slice++++++++++++++++++++++++++++++

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

