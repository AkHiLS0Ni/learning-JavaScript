// type of memory in JavaScript
// Stack and Heap Memory in JavaScript
//stack (primitive)
// Stack memory is used for static memory allocation, while heap memory is used for dynamic memory allocation.
// Stack memory is faster and has a fixed size, while heap memory is slower and can grow or shrink dynamically.
// Stack memory is used for primitive data types and function calls, while heap memory is used for objects and arrays.
// Stack memory is automatically managed, while heap memory requires manual management (e.g., garbage collection).  
// Stack memory is organized in a Last In First Out (LIFO) manner, while heap memory is organized in a more complex structure.
// Stack memory is limited in size, while heap memory can grow as needed.
// Stack memory is used for function calls and local variables, while heap memory is used for objects and arrays.

//Heap (non primitive )
// Heap memory is used for dynamic memory allocation, while stack memory is used for static memory allocation.
// Heap memory is slower than stack memory, as it requires more complex management.
// Heap memory can grow or shrink dynamically, while stack memory has a fixed size.
// Heap memory is used for objects and arrays, while stack memory is used for primitive data types and function calls.
// Heap memory is organized in a more complex structure, while stack memory is organized in a Last  In First Out (LIFO) manner.
// Heap memory requires manual management (e.g., garbage collection), while stack memory is automatically managed.
// Heap memory can grow as needed, while stack memory is limited in size.



// Example of stack memory
let x = 10; // primitive data type stored in stack memory
let y = 20; // another primitive data type stored in stack memory
let sum = x + y; // sum is also a primitive data type stored in stack memory    

// Example of heap memory
let person = { // object stored in heap memory
    name: "John",
    age: 30
}; // person is a reference to an object stored in heap memory
