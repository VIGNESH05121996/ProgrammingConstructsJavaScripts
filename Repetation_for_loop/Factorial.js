//Given to find factorial of number
var prompt = require('prompt-sync')();

let n=parseInt(prompt("Enter nth value"));
let fact=1;
for(i=1;i<=n;i++)
{
    fact *= i;
}
console.log("Factorial of $n is" +fact);