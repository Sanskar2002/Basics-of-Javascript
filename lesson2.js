//Operations in JS

let a = 4;
let b = 6;

//Always use brackets to perform any operation as it will make your code look more readable and clear
const operation = ((a + b) * (a + b) / 2);
console.log(operation);

let c = "1";
let d = 2;

console.log(c+d);
console.log(typeof(c+d));

//If we will try to access any const or let variable before its declaration, it will through error
//but if we will make it var, then it will not through error.
//console.log(pow);

//This will return the ath power of a
let pow = a**a;

//We can generate random number from this function
console.log(Math.floor(Math.random()*8));

console.log(pow);

//Function to return maximum and minimum number
console.log(Math.max(5, 10));
console.log(Math.min(1, 11));

let firstName = "sanskar";
let lastName = "gupta";

//Adding two string
let fullName = firstName + " " + lastName;
console.log(fullName);

//Function to convert to lower and uppercase 
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.slice(0, 5));

let greeting = `Hello ${firstName}`;
console.log(greeting);