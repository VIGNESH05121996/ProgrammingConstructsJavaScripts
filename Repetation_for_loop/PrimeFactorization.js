//Factors of Number using prime factorization
var prompt = require('prompt-sync')();

let n=parseInt(prompt("Enter a number"));
for(i=2;i<=n;i++)
{
    if(n%i == 0)
    {
        isPrime=1;
        for(j=2;j<=i/2;j++)
        {
            if(i%j == 0)
            {
               isPrime=0;
            }
        }
        if(isPrime == 1)
        {
            console.log(i);
        }
    }
}