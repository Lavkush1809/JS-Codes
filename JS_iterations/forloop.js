//for loop
for (let index = 0; index < 10; index++) {
    const element = index
    console.log(element) 
}

let sum = 0;

for(let i = 1; i <= 10; i++){
    sum  += i;
}
console.log(sum);

const myArray = ["flash","batman","superman"]
for(let i=0; i < myArray.length; i++){
    console.log(myArray[i])
}

//break and contniue keyword are used to control the flow of the loop

console.log("output of the break loop");
for(let i = 0; i < 10; i++){
    if(i == 6){
        break; //will come out of the loop
    }
    console.log(i);
}

console.log("output of the continue loop");
for(let i = 0; i < 10; i++){
    if(i == 6){
        continue; //skip the i==6
    }
    console.log(i);
}
//for copying the value :- alt+shift+down key
