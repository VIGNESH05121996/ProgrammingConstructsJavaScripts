//Given read single digit number and display week days
var prompt = require('prompt-sync')();
let num=parseInt(prompt("\nEnter Single Digit Number from 1 to 7"));

switch(num)
{
case 1:
  console.log("Sunday");
  break;

case 2:
  console.log("Monday");
  break;

case 3:
  console.log("Tuesday");
  break;

case 4:
    console.log("Wednesday");
    break;

case 5:
    console.log("Thursday");
    break;

case 6:
    console.log("Friday");
    break;

case 7:
    console.log("Saturday");
    break;

default:
    console.log("Enter valid input");
    break;
}

