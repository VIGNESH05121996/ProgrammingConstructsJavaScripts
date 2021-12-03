//Given function to check number is palindrome and also check palindrome number is prime
var prompt = require('prompt-sync')();
function palidoromeNumbers(number)
{
    result=0;
    temp=number;
    while(number>0)
    {
        rem=number%10;
        number=parseInt(number/10);
        result=(result*10) + rem; 
    }
    if(result == temp)
    {
        console.log("Number is palindrome");

        if(result % 2 ==0)
        {
          console.log(" Palindrome number is prime");
        }
        else
        {
          console.log("Palindrome is not prime");
        }

    }
    else
    {
        console.log("Number is not palindrome");
    }
}

let paliNum=parseInt(prompt("Enter A Palindrome Number"));
palidoromeNumbers(paliNum);