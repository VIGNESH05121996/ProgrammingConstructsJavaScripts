//Given to flip coin for 11 times
let a=1;
while(a<=11)
{
    n=Math.floor(Math.random()*10)%2;
    if(n == 0)
      console.log("Heads");
    else
      console.log("Tails");
      a++;
}