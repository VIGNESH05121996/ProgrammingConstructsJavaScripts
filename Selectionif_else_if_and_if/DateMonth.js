//Given print true if day of month between March 20 and June 20
var prompt = require('prompt-sync')();

let date = prompt("Enter date: ");
let Month = prompt("Enter month: ");

if ( date <= 20 && Month == 'march' && Month == 'april' && Month == 'may' && Month == 'june' )
{ 
     console.log("the $Month and $date is true");
}    
else
{
    console.log("false");
}