//lets learn objects and master javascript

//object literals


//one method to create object is using Object.create() which is made thorugh constructor which result inot singleton

const mySym = Symbol("Key1") //we are defining symbol here and will use as key in object

const jsUser ={
    name : "Lavkush",
    "full_name" : "Lavkush Patel",
    regno : 12018416,
    age : 21,
    isloggedIn : false, 
    email : "lavkush@google.com",
    loggedDays : ["Monday","Wednesday"],
    [mySym] : "myKey1"
} //we have created object here


//to access the objects
console.log(jsUser["email"]);
console.log(jsUser["full_name"]);
console.log(typeof jsUser.name); //see the type 
console.log(typeof jsUser.regno);
console.log(typeof jsUser);
console.log(typeof jsUser.mySym);

//to change the value 
jsUser.email = "lavkush@amazon.com"
console.log(jsUser["email"]);
//we can freeze the values using :- Object.freeze(jsUser); , and after this no values can be changed;

//lets define function here

jsUser.greetings = function(){
    console.log("Hello ji kaise ho ?");
}

console.log(jsUser.greetings); //it gives a function reference

console.log(jsUser.greetings()); //it prints the value present inside function

jsUser.greetingstwo = function(){
    console.log(`Hello ji kaise ho ? ${this.name}`); //we are referencing an object inside the function, we use this keyword to refer same o bject
}
console.log(jsUser.greetingstwo());