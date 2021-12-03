//Given to find harmonic number
var prompt = require('prompt-sync')();

let har = 1;
let n=parseInt(prompt("Enter nth value"));
for(i=2;i<=n;i++)
{
    har += 1 / i;
    console.log("Harmonic:" + har);
}