// for-of loop

let arr = [1,2,3,4,5]

for (const index of arr) {
    console.log(`values inside the array are ${index}`);
}

let greetings = "Hello World"

for (const greet of greetings) {
    if(greet === " "){
        continue
    }
    else {
     console.log(`Each character are ${greet}`);
    }
}

const myMap = new Map()

myMap.set('In', "India")
myMap.set('UK', "United Kingdom")
myMap.set('UAE', "United Arab of Emirates")

console.log(myMap); //it prints the unique key-value pairs

//using for-of loop
for (const [key,value] of myMap) {
     console.log(`${key} value is ${value}`);
}

//loop in Objects

const myObj = {
    rb : "ruby",
    cpp : "c++",
    py : "pyhton"
}

//for in loop gives the key 
for (const key in myObj) {
     console.log(`${key} values are :- ${myObj[key]}`);
}