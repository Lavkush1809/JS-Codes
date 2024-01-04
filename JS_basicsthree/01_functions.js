//we are learning functions 

function myNameFunction(){
    console.log("Hello");
    console.log("Lavkush");
    console.log("Patel");
}

myNameFunction // this is just a reference which is telling that there is a function named as myNameFunction

//calling function and execution
myNameFunction();

function addTwoNumbers(number1, number2){

    return number1+number2
    console.log("Lavkush"); // once a function returns a value, the line of codes below it never get executed;

}

const result = addTwoNumbers(15,20)
console.log(result);

function loginOrNot(username){
    return `${username} just logged in`
}
loginOrNot("Lavkush") //here the function is returning the value but not printing it since we have not used console.log

console.log(loginOrNot("Lavkush"))

function loginOrNotagain(username1){
    if(!username1){
        console.log("please enter your name");
    }
    return `${username1} just logged in`
}

loginOrNotagain("") //since we have not entered name it will execute if block

function loginOrNot1(username2 = "Lav"){
     if(!username2){
        console.log("enter your name");
        return
     }
     return `${username2} just logged in`
}

console.log(loginOrNot1()); //it will just take username as "Lav"
console.log(loginOrNot1("ishika")); //it will overwrite ishika with Lav

//when we go for shopping we start adding elements in our cart so how the function will accept the parameters

function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(200,300,400)); // so this will basically accept only the first argument


//so to accept multiple arguments we can use rest operator(...)
function calculateCartPriceagain(...num1){
    return num1
}

console.log(calculateCartPriceagain(200,300,400)); //it will return an array

//passing object inside an function

const obj1  = {
    enterName : "Lavkush",
    price : 400
}

function handleObject(anyObject){
    return `The name is ${anyObject.enterName} and price is ${anyObject.price}`
}

console.log(handleObject(obj1))

//we can pass an array also

const myArray = ["Lavkush", 200, true, {name: "bhavya"}]

function handleArray(getArray){
    return getArray[3]
}

console.log(handleArray(myArray));

