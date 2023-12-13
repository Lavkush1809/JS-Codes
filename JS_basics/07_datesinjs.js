//lets learn dates

let myDate = new Date()

console.log(myDate); //gives the date
console.log(myDate.toString());
console.log(myDate.toDateString()); //returns date as a string
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let newDate = new Date(2023,0,25); //0->denotes month january, 2023 is year, 25 is the date
console.log(newDate.toDateString()); //gives only the day and date 

/* Timestamps*/

let myTimeStamp = Date.now();
console.log(myTimeStamp); //it gives the total time  that has been spent in milliseconds since jan 1,1970

