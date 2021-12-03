//Given number is prime or not
var prompt = require('prompt-sync')();

let a=parseInt(prompt("Enter starting Number"));
let b=parseInt(prompt("Enter Ending Number"));

for(i=a;i<=b;i++)
{
    prime=0;
    for(j=2;j<i;j++)
    {
        if(i%j==0)
        {
            prime++;
        }
    }
    if(prime == 0 && i != 1)
    {
        console.log(i);
    }
}