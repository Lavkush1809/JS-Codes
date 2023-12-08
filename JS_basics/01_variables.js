const accountId = 123456
let emailId = "lavkush@gmail.com"
var accountPass = "12345"
accountCity = "Bilaspur"

//accountId = 23456
//This is a comment which is ignored by compiler


/* we dont use "var" because of functional scope issue */
console.log(accountId);

console.table([emailId,accountPass,accountCity])