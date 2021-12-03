//Given to find sum and average of 5 random numbers
let a=Math.floor(Math.random()*99)+1;
console.log("First Random Number: "+a);
let b=Math.floor(Math.random()*99)+1;
console.log("Second Random Number: "+b);
let c=Math.floor(Math.random()*99)+1;
console.log("Third random Number: "+c);
let d=Math.floor(Math.random()*99)+1;
console.log("Fourth Random Number: "+d);
let e=Math.floor(Math.random()*99)+1;
console.log("Fifth Random Number: "+e);

sum=a+b+c+d+e;
console.log("\nSum: "+sum);
average=sum/5;
console.log("\nAverage: "+average);