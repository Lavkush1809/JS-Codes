//lets start the array

const myArr = [0,1,2,3,4,5] //javascript variables are resizable and contains different datatypes;

console.log(myArr);
console.log(typeof myArr); //array is an object in js
console.log(myArr.length); //length here is an property of an array

//to insert new elements in an array

myArr.push(7)
console.log(myArr);

myArr.pop()// simply delete the last element of an array.
console.log(myArr);

const marvel_heroes = ["Ironman","thor","hulk"]

const dc_heroes = ["superman","flash","batman"]

console.log(marvel_heroes.concat(dc_heroes)); //in this the two arrays get combined into new array;

//when we use push() in an array , one array gets added into another array;


//spread operator

const new_array = [...marvel_heroes,...dc_heroes] //it will sperad all array elements into indiviual elements

console.log(new_array);

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3)); //make array of different numbers


// we can convert name into array as well
console.log(Array.from("Lavkush")); //it converts the name into array

const diff_array = [1,2,3,[4,5],[8,9],[[12,13],55,[16,20]]]

console.log(diff_array.flat(Infinity)); //it will remove all the inside array and will convert into one single array


console.log(Array.from({name:"Lavkush"}));//it will return empty array as it will get confused whether to make array from key or value