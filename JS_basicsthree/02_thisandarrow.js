/****************************This keyword***************** */
const user = {
    username : "Lavkush",
    age : 21,
     welcomeMessage : function(){
        console.log(`${this.username}, welcome to website `);//this keyword inside the block referes to cureent context;
    }
}

user.welcomeMessage();
user.username = "Jaanam"
user.welcomeMessage();


//++++++++++++++++++++++++++  Arrow function   ++++++++++++
 const addTwo = (num1,num2) => {
    return num1 + num2
}

//Note :- if we are using curly braces for arow function then we have to use return keyword

const addNumber = (num1, num2) => (num1+num2) //here we are not using return keyword