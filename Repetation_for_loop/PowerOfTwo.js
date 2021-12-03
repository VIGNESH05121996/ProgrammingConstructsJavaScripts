//Given to find to power of two
var prompt = require('prompt-sync')();

let n=parseInt(prompt("Enter 2^n's nth value"));
            
for (i=1;i<=n;i++)
{
    a = Math.pow(2,i);
    console.log(+ a);
}