//operators

let a = 10;
let b = 5;

//arithmetic operators
let sum = a + b;
let product = a * b;
let divide = a / b;
let sub = a - b;
let mod = a % b;
let expo = a ** b;
let prefix = ++a;
let posfix = a++;

console.log(`Sum: ${sum}`);
console.log(`Sub: ${sub}`);
console.log(`Divide: ${divide}`);
console.log(`Product: ${product}`);
console.log(`Modulus: ${mod}`);
console.log(`Exponential: ${expo}`);
console.log(`Prefix of (a): ${prefix}`);
console.log(`Postfix of (a): ${posfix}`);

//Assigment operators
 a += 5;
 b +=10;

 console.log(`New value of (a) : ${a}`);
 console.log(`New value of (b) : ${b}`);

 //Comparison operators
let isEqual = (a === b);
let isNotEqual = (a !== b);
let isGreater = (a > b);
let isLess = (a < b);

console.log(`Is Equal: ${isEqual}`);
console.log(`Is Not Equal: ${isNotEqual}`);
console.log(`Is Greater: ${isGreater}`);
console.log(`Is Less: ${isLess}`);

//logical operators
let andResult = (a > 10 && b > 15);
let orResult = (a > 10 || b > 15);
let notResult = !(a === 15);

console.log(`AND Result: ${andResult}`);
console.log(`OR Result: ${orResult}`);
console.log(`NOT Result: ${notResult}`);
