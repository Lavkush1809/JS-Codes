const tinderUser = new Object(); //creates an object and this object is singleton

console.log(tinderUser); //return an empty object

tinderUser.id = "123abc"
tinderUser.name = "Lavkush"
tinderUser.isLoggedIn = false

console.log(tinderUser); //it return key-value pair

//we can create objects inside object

const newUser = {
    emai : "lavkush@gmail.com",
    fullname : {
        firtsname : "Lavkush",
        lastname : "Patel"
    }
}
console.log(newUser);
console.log(newUser.fullname.firtsname); //accessing the values of object inside the object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"c", 3: "d"}

//merging two objects

const obj3 = Object.assign({},obj1,obj2)

console.log(obj3);

//another way of merging two object is using spread operator

const resultObject = {...obj1,...obj2}
console.log(resultObject); //it gives the same result as assign method

//we can even print the keys and values 
console.log(Object.keys(tinderUser)); //gives the keys in array form 
console.log(Object.values(tinderUser)); //gives the values in array form
console.log(Object.entries(tinderUser)); // we get array inside an array

//to check if an object has a specific property/key or not

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //gives true as this porperty exist in tinderuser

//objcet destructuring

const course = {
      coursename : "Javscript",
      courseid: 120,
      courseinstructor:"hitesh"
}

//if you want to access the name of courseinstructor you can use another method

const {courseinstructor} = course //we printing the value of courseinstructor
console.log(courseinstructor);