const marvel_heroes = [ "thor", "hulk", "ironman", "captain america", "black widow", "spiderman" ];

const dc_heroes = [ "superman", "batman", "flash", "wonder "];

//marvel_heroes.push(dc_heroes);

//console.log(marvel_heroes);

// Concatenating the two arrays=====================================

//const all_heroes = marvel_heroes.concat(dc_heroes);
//console.log(all_heroes);

// sprad operator
const all_heroes_spread = [...marvel_heroes, ...dc_heroes];

console.log(all_heroes_spread);


// Using the spread operator to merge arrays

///===+++++++++++=====================+++++++++++++++++==============++++


const another_array = [ 1,2 ,3, [4, 5, 6] ,7,[6, 7, [4, 5]] ];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

// Flattening the array using flat method

console.log (Array.isArray("akhil"));
// Checking if a variable is an array using Array.isArray method


console.log (Array.from("akhil"));
console.log(Array.from({name: "akhil"})); // interesting 
// Converting a string to an array using Array.from method  

  let score1 = 100
  let score2 = 200
  let score3 = 300


  console.log(Array.of(score1, score2, score3));
// Creating an array from individual elements using Array.of method