const score = 400
console.log(score);

//new way to declare a number

const balance = new Number(100) //here it is 100 % gurantee that this will be a number
console.log(balance);

console.log(balance.toExponential());
console.log(balance.toFixed(2));
console.log(balance.toString().length); //here we can perform string functions as we have converted into a string

//******************** */
//Maths
 
console.log(Math);  //math is a object in a js and have several other functions
console.log(Math.abs(-4)); //changes negative to positive
console.log(Math.round(7.8));
console.log(Math.ceil(6.4)); //gives the top decinmal value i.e 7
console.log(Math.floor(7.9)); //gives the bottom value i.e 7