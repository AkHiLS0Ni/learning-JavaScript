// objects are declared using the object literal syntax and consrtuctors
// objects are mutable and can be changed after creation    

// singleton object

// object literal syntax



const mySym = Symbol("Key1");


const JsUser ={  
    name: "akhil",
    [mySym]: "myKey1",
    age: 22,
    location: "jaipur",
    email: "akhilsoni.ak@gmail,com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(JsUser["name"])



JsUser.email = " akhilsoni234@gamil.com";
//Object.freeze(JsUser); // this will make the object immutable, no changes can be made to it
// JsUser.email = "
JsUser.email="kjhkjegjdgbkj@gmail.com"
console.log(JsUser);


JsUser.greeying = function () {
    console.log("Hello js user");

}

console.log(JsUser.greeying());