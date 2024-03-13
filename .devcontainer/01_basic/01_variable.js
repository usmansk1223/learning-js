const accountId = 144235
/*This const keyword it is a variable type and value we assign to this will remain constant we can't
redeclare the value
*/
let accountEmail = "usman@google.com"
/* This is variable here we can change the assigned value and it store in memory as container
This is new way of declaring variable and it's resolve the issues of block scope and functional scope */
var  accountPassword = "12345"
// try not to use this variable bacause it creates issues in block scope and functional scope
accountCity = "Hyderabad"

//accountId = 4 // not allowed 
/* Here below we're reassigning the value and worked in console as expected*/
accountEmail = "us@us.com"
accountPassword = "23232323"
accountCity = "Bengaluru" // here we're not defining the variable but JS know this variable and assign the value to memory.
// aviod this way of using variable.
let accountState; // This is undefine variable type 

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
