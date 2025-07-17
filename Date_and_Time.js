// Date and Time in JavaScript
// This file demonstrates how to work with dates and times in JavaScript.
//const currentDate = new Date(); // Get the current date and time
//console.log("Current Date and Time:", currentDate);
//console.log("Year:", currentDate.getFullYear()); // Get the current year
//console.log("Month:", currentDate.getMonth() + 1); // Get the current month


let myDate = new Date()
//console.log(myDate.toString()); // Output: Current date and time in string format
//console.log(myDate.toDateString()); // Output: Current date in a human-readable format  
//console.log(myDate.toLocaleString()); // Output: Current date and time in locale-specific format
//console.log(myDate.getFullYear()); // Output: Current year  
//console.log(myDate.getMonth() + 1); // Output: Current month (0-11, so add 1 for human-readable format)
//console.log(myDate.getDate()); // Output: Current day of the month (1-31)
//console.log(typeof myDate); // Output: "object" (Date is an object in JavaScript)   

//let myCreatedDate = new Date(2023, 0, 23);
//console.log(myCreatedDate.toDateString()); // Output: "Mon Jan 23 2023" (Date in human-readable format)


//let myCreatedDate = new Date("07-17-2025");
//console.log(myCreatedDate.toDateString()); // Output: "Thu Jul 17 2025" (Date in human-readable format)


//let myTimeStamp = Date.now();
//console.log(myTimeStamp); // Output: Current timestamp in milliseconds since January 1, 1970
//console.log(myCreatedDate.getTime()); // Output: Timestamp of myCreatedDate in milliseconds since January 1, 1970

//console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds since January 1, 1970
//console.log(myCreatedDate.getTime() / 1000); // Output: Timestamp of myCreatedDate in seconds since January 1, 1970

myDate.toLocaleString('en-IN', {
    weekday: 'long', // Full name of the day
    year: 'numeric', // Full numeric year
    month: 'long', // Full name of the month
    day: 'numeric', // Numeric day of the month
    hour: '2-digit', // Two-digit hour
    minute: '2-digit', // Two-digit minute
    second: '2-digit' // Two-digit second
}); // Output: "Monday, January 23, 2023, 12:00:00 AM" (formatted date and time in Indian locale)
