//Given Enter 3 Numbers to do arithmatic operations and find max and min value

let a=20,b=15,c=10,d=5;
result1=a+b*c;
result2=a%b+c;
result3=c+a/b;
result4=a*b+c;
console.log("Result 1: "+result1+"\nResult 2: "+result2+"\nResult 3: "+result3+"\nResult 4: "+result4);

//to find maximum
if(result1>result2  && result1>result3 && result1>result4)
  console.log(result1+" Is Maximum");
else if(result2>result1 && result2>result3 && result2>result4)
  console.log(result2+" Is Maximum");
else if(result3>result1 && result3>result2 && result3>result4)
  console.log(result3+" Is Maximum");
else
  console.log(result4+" Is Maximum");

//to find minimum
if(result1<result2  && result1<result3 && result1<result4)
  console.log(result1+" Is Minimim");
else if(result2<result1 && result2<result3 && result2<result4)
  console.log(result2+" Is Minimum");
else if(result3<result1 && result3<result2 && result3<result4)
  console.log(result3+" Is Minimum");
else
  console.log(result4+" Is Minimum");