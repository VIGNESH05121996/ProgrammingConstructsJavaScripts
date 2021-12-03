//Given to check number is palindrome
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
    }
    else
    {
        console.log("Number is not palindrome");
    }
}
let paliNum=parseInt(prompt("Enter Number"));
palidoromeNumbers(paliNum);