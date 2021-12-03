//Maximum and minumum of random 3 digit number
let a=Math.floor((Math.random()*90)+100);
let b=Math.floor((Math.random()*90)+100);
let c=Math.floor((Math.random()*90)+100);
let d=Math.floor((Math.random()*90)+100);
let e=Math.floor((Math.random()*90)+100);

console.log("First Num:"+a+"\nSecond Num:"+b+"\nThird Num:"+c+"\nFourth Num:"+d+"\nFifth Num:"+e+"\n");

//for maximum
if(a>b && a>c && a>d && a>e)
{
    console.log(a+" is Maximum");
}
else if(b>a && b>c && b>d && b>e)
{
    console.log(b+" is Maximum");
}
else if(c>a && c>b && c>d && c>e)
{
    console.log(c+" is Maximum");
}
else if(d>a && d>b && d>c && d>e)
{
    console.log(d+" is Maximum");
}
else
{
    console.log(e+" is Maximum");
}

//for minimum
if(a<b && a<c && a<d && a<e)
{
    console.log(a+" is Minimum");
}
else if(b<a && b<c && b<d && b<e)
{
    console.log(b+" is Minimum");
}
else if(c<a && c<b && c<d && c<e)
{
    console.log(c+" is Minimum");
}
else if(d<a && d<b && d<c && d<e)
{
    console.log(d+" is Minimum");
}
else
{
    console.log(e+" is Minimum");
}