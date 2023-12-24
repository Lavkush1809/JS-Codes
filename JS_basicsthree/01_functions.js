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