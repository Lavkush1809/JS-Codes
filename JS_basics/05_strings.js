const  name = "Lavkush"
const countRepo = 50


console.log(name + countRepo + "Value");

//new way to print value

console.log(`My name is ${name} and my countRepo is ${countRepo}`);

//new way to declare a string
//String act as an object in js and value is stored in the form of key-value pairs

const name1 = new String('Lavkush')

console.log(name1);
console.log(typeof name1);
console.log(name1[0]); //to access the first value using its key : 0

//we can print its protoype as well
console.log(name1.__proto__); //showing empty object

console.log(name1.length);
console.log(name1.toUpperCase()); /*there is no change in the original string as this is stored in stack and
 original doesn't get affected*/

console.log(name1.charAt(2));

console.log(name1.substring(0,5));
console.log(name1.slice(-8,3)); //slice method allows negative value

const name2 = "     Lavkush   patel "

console.log(name2);
console.log(name2.trim()); //trim() removes the extra space present in a string
console.log(name2.trimStart());
console.log(name2.trimEnd());