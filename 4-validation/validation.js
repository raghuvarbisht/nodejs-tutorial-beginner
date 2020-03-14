// npm i validator
// third party library for validatng user input-like: Emailid , credit card etc.

const validator = require('validator');

console.log(validator.isEmail('test@gmail.com')); // true
console.log(validator.isURL('www.google.com')); // true
