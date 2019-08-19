alert("connected");
var d1=0;
var d2=0;
var d3=0;
var d4=0;
var d5=0;
var d6=0;
var d7=0;
var d8=0;
var d9=0;
var d10=0;
var d11=0;
var d12=0;
var d13=0;
var d14=0;
var f1=0;
var f2=0;
var f3=0;
var f4=0;
var f5=0;
var f6=0;
var f7=0;
var g1=0;
var g2=0;
var g3=0;
var g4=0;
var g5=0;
var g6=0;
var g7=0;
var g8=0;
var p1=0;
var p2=0;
var p3=0;
var p4=0;
var p5=0;
var p6=0;
var p7=0;
var j1=0;
var j2=0;
var j3=0;
var j4=0;
var j5=0;
var j6=0;
var j7=0;
var j8=0;
var pd1=0;
var pd2=0;
var pd3=0;
var pd4=0;
var pd5=0;
var pd6=0;
var pd7=0;
var jd1=0;
var jd2=0;
var jd3=0;
var jd4=0;
var jd5=0;
var jd6=0;
var jd7=0;
var jd8=0;

var line= document.querySelectorAll(".e");
var oneone= document.querySelector("#oneone");
var onefive= document.querySelector("#onefive");
var oneseven= document.querySelector("#oneseven");
var twotwo= document.querySelector("#twotwo");
var threefive= document.querySelector("#threefive");
var fourtwo= document.querySelector("#fourtwo");
var foursix= document.querySelector("#foursix");
var fivethree= document.querySelector("#fivethree");
var fivefive= document.querySelector("#fivefive");
var sixtwo= document.querySelector("#sixtwo");
var sixseven= document.querySelector("#sixseven");
var sevenone= document.querySelector("#sevenone");
var seventhree= document.querySelector("#seventhree");
var sevensix= document.querySelector("#sevensix");
var submit=document.querySelector(".btn")
var r1=document.querySelectorAll(".r1");
var r3=document.querySelectorAll(".r3");
var r2=document.querySelectorAll(".r2");
var r5=document.querySelectorAll(".r5");
var r6=document.querySelectorAll(".r6");
var r7=document.querySelectorAll(".r7");
var r4=document.querySelectorAll(".r4");
var l1=document.querySelectorAll(".l1");
var l2=document.querySelectorAll(".l2");
var l3=document.querySelectorAll(".l3");
var l4=document.querySelectorAll(".l4");
var l5=document.querySelectorAll(".l5");
var l6=document.querySelectorAll(".l6");
var l7=document.querySelectorAll(".l7");
var l8=document.querySelectorAll(".l8");


oneone.addEventListener("click",c1);
function c1()
{
	d1=1;
  drawhorizontal(d1,d2,f1,r1);
  p1=drawhorizontal(d1,d2,f1,r1);
  if(p1==1||p1==2)
  {
    pd1=p1;
  }
  if(d1==1&&d2==1)
  {
   d1=0;
   d2=0;
   f1=1;
  }
  drawvertical(d3,d1,g1,l1);
  j1= drawvertical(d3,d1,g1,l1);
  if(j1==1||j1==2)
  {
    jd1=j1;
  }
  if(d3==1&&d1==1){
   d3=0;
   d1=0;
   g1=1;
  }
   // console.log(jd1);

 }



onefive.addEventListener("click",c2);
function c2()
{
	d2=1;
  drawhorizontal(d1,d2,f1,r1);
  p1=drawhorizontal(d1,d2,f1,r1);
  if(p1==1||p1==2)
  {
    pd1=p1;
  }
  
  if(d1==1&&d2==1){
   d1=0;
   d2=0;
   f1=1;
  }

   drawhorizontal(d4,d2,f2,r2);
   p2=drawhorizontal(d4,d2,f2,r2);
   if(p2==1||p2==2){
    pd2=p2;
   }
  if(d4==1&&d2==1){
   d4=0;
   d2=0;
   f2=1;
  }
   drawvertical(d2,d6,g5,l5);
   j5=drawvertical(d2,d6,g5,l5);
   if(j5==1||j5==2){
    jd5=j5;
   }
  if(d2==1&&d6==1){
   d2=0;
   d6=0;
   g5=1;
  }
  
console.log(jd5);
  
}

oneseven.addEventListener("click",c4);
function c4()
{
  d4=1;
   drawhorizontal(d4,d2,f2,r2);
   p2=drawhorizontal(d4,d2,f2,r2);
   if(p2==1||p2==2){
    pd2=p2;
   }
  if(d4==1&&d2==1){
   d4=0;
   d2=0;
   f2=1;
  }
   drawvertical(d12,d4,g8,l8);
   j8=drawvertical(d12,d4,g8,l8);
   if(j8==1||j8==2){
     jd8=j8;
   }
  if(d4==1&&d12==1){
   d4=0;
   d12=0;
   g8=1;
  }
	 console.log(jd8);
}
twotwo.addEventListener("click",c5);
function c5()
{
	d5=1;
  drawvertical(d5,d7,g2,l2);
  j2=drawvertical(d5,d7,g2,l2);
  if(j2==1||j2==2)
  {
    jd2=j2;
  }
  if(d5==1&&d7==1){
   d5=0;
   d7=0;
   g2=1;
  }
}
threefive.addEventListener("click",c6);
function c6()
{
	d6=1;
  drawvertical(d2,d6,g5,l5);
  j5= drawvertical(d2,d6,g5,l5);
  if(j5==1||j5==2)
  {
    jd5=j5;
  }

  if(d2==1&&d6==1){
   d2=0;
   d6=0;
   g5=1;
  }
   drawvertical(d10,d6,g6,l6);
   j6=drawvertical(d10,d6,g6,l6);
   if(j6==1||j6==2)
   {
    jd6=j6;
   }
  if(d10==1&&d6==1){
   d10=0;
   d6=0;
   g6=1;
  }
  console.log(jd5);

}
fourtwo.addEventListener("click",c7);
function c7()
{
  d7=1;
  drawhorizontal(d7,d8,f3,r3);
  p3=drawhorizontal(d7,d8,f3,r3);
  if(p3==1||p3==2){
    pd3=p3;
  }
  if(d7==1&&d8==1){
   d7=0;
   d8=0;
   f3=1;
  }
   drawvertical(d5,d7,g2,l2);
   j2=drawvertical(d5,d7,g2,l2);
   if(j2==1||j2==2){
    jd2=j2;
   }
  if(d5==1&&d7==1){
   d5=0;
   d7=0;
   g2=1;
  }
   drawvertical(d7,d11,g3,l3);
   j3=drawvertical(d7,d11,g3,l3);
   if(j3==1||j3==2){
    jd3=j3;
   }
  if(d11==1&&d7==1){
   d11=0;
   d7=0;
   g3=1;
  }
  
  
}
foursix.addEventListener("click",c8);
function c8()
{
   d8=1;
   drawhorizontal(d7,d8,f3,r3);
   p3=drawhorizontal(d7,d8,f3,r3);
   if(p3==1||p3==2)
   {
    pd3=p3;
   }
  if(d7==1&&d8==1){
   d7=0;
   d8=0;
   f3=1;
  }
   drawvertical(d8,d14,g7,l7);
   j7=drawvertical(d8,d14,g7,l7);
   if(j7==1||j7==2)
   {
    jd7=j7;
   }
  if(d14==1&&d8==1){
   d14=0;
   d8=0;
   g7=1;
  }
  
  
	
}
fivethree.addEventListener("click",c9);
function c9()
{
  d9=1;
   drawhorizontal(d9,d10,f4,r4);
   p4=drawhorizontal(d9,d10,f4,r4);
   if (p4==1||p4==2)
   {
    pd4=p4;
   }
  if(d9==1&&d10==1){
   d9=0;
   d10=0;
   f4=1;
  }
   drawvertical(d9,d13,g4,l4);
   j4=drawvertical(d9,d13,g4,l4);
   if(j4==1||j4==2){
    jd4=j4;
   }
  if(d9==1&&d13==1){
   d13=0;
   d9=0;
   g4=1;
  }
	
}
fivefive.addEventListener("click",c10);
function c10()
{
	 d10=1;
    drawhorizontal(d9,d10,f4,r4);
    p4= drawhorizontal(d9,d10,f4,r4);
    if (p4==1||p4==2)
   {
    pd4=p4;
   }
  if(d9==1&&d10==1){
   d9=0;
   d10=0;
   f4=1;
  }
  drawvertical(d10,d6,g6,l6);
  j6=drawvertical(d10,d6,g6,l6);
  if(j6==1||j6==2)
   {
    jd6=j6;
   }
  if(d10==1&&d6==1){
   d10=0;
   d6=0;
   g6=1;
  }

}
sixtwo.addEventListener("click",c11);
function c11()
{
	 d11=1;
   drawhorizontal(d11,d12,f5,r5);
   p5= drawhorizontal(d11,d12,f5,r5);
   if(p5==1||p5==2){
    pd5=p5;
   }
  if(d11==1&&d12==1){
   d11=0;
   d12=0;
   f5=1;
  }
   drawvertical(d7,d11,g3,l3);
   j3=drawvertical(d7,d11,g3,l3);
   if(j3==1||j3==2)
   {
    jd3=j3;
   }
  if(d11==1&&d7==1){
   d11=0;
   d7=0;
   g3=1;
  }
	
}
sixseven.addEventListener("click",c12);
function c12()
{
   d12=1;
   drawhorizontal(d11,d12,f5,r5);
   p5= drawhorizontal(d11,d12,f5,r5);
   if(p5==1||p5==2)
   {
    pd5=p5;
   }
  if(d11==1&&d12==1){
   d11=0;
   d12=0;
   f5=1;
  }
  drawvertical(d12,d4,g8,l8);
  j8=drawvertical(d12,d4,g8,l8);
  if(j8==1||j8==2){
    jd8=j8;
  }
  if(d4==1&&d12==1){
   d4=0;
   d12=0;
   g8=1;
  }
  console.log(jd8);
}
//three letters case leave for now
sevenone.addEventListener("click",c3);
function c3()
{
	 d3=1;
   drawhorizontal(d3,d13,f6,r6);
   p6=drawhorizontal(d3,d13,f6,r6);
   if(p6==1||p6==2){
    pd6==p6;
   }
  if(d3==1&&d13==1){
   d3=0;
   d13=0;
   f6=1;
  }
  drawvertical(d3,d1,g1,l1);
  j1=drawvertical(d3,d1,g1,l1);
  if(j1==1||j1==2){
    jd1=j1;
  }
  if(d3==1&&d1==1){
   d3=0;
   d1=0;
   g1=1;
  }
   console.log(jd1);
  
}
seventhree.addEventListener("click",c13);
function c13()
{
	d13=1;
  drawhorizontal(d3,d13,f6,r6);
  p6=drawhorizontal(d3,d13,f6,r6);
  if(p6==1||p6==2){
    pd6=p6;
  }
  if(d3==1&&d13==1){
   d3=0;
   d13=0;
   f6=1;
  }
  drawhorizontal(d14,d13,f7,r7);
  p7= drawhorizontal(d14,d13,f7,r7);
  if (p7==1||p7==2){
    pd7=p7;
  }
  if(d14==1&&d13==1){
   d14=0;
   d13=0;
   f7=1;
  }
   drawvertical(d9,d13,g4,l4);
   j4=drawvertical(d9,d13,g4,l4);
   if(j4==1||j4==2){
    jd4=j4;
   }
  if(d9==1&&d13==1){
   d13=0;
   d9=0;
   g4=1;
  }
 
}
sevensix.addEventListener("click",c14);
function c14()
{
  d14=1;
  drawhorizontal(d14,d13,f7,r7);
  p7= drawhorizontal(d14,d13,f7,r7);
  if(p7==1||p7==2){
    pd7=p7;
  }
  if(d14==1&&d13==1){
   d14=0;
   d13=0;
   f7=1;
  }
   drawvertical(d8,d14,g7,l7);
   j7=drawvertical(d8,d14,g7,l7);
   if(j7==1||j7==2){
    jd7=j7;
   }
  if(d14==1&&d8==1){
   d14=0;
   d8=0;
   g7=1;
  }
  
}

function drawhorizontal(a,b,c,d) {
  if(a==1 && b==1 && c==0)
  {
    for(var i=0;i<d.length;i++)
    {
      d[i].style.borderTop="2px solid white";
    }
    return 1;
  }
  else if(a==1 && b==1 && c==1)
  {
   for(var i=0;i<d.length;i++)
    {
      d[i].style.borderBottom="2px solid white";
    }
    return 2;
    
 }
 
}
function drawvertical(a,b,c,d) {
  if(a==1 && b==1 && c==0)
  {
    for(var i=0;i<d.length;i++)
    {
      d[i].style.borderLeft="2px solid white";
    }
    return 1;
  }
  else if(a==1 && b==1 && c==1)
  {
   for(var i=0;i<d.length;i++)
    {
      d[i].style.borderRight="2px solid white";
    }
    return 2;
    
 }

}
submit.addEventListener("click",correct)
function correct()
{
  if(pd1==2 && pd2==2 && pd3==1 && pd4==1 && pd5==0 && pd6==1 && pd7==1 && jd1==2 && jd2==1 && jd3==2 && jd4==1 && jd5==2 && jd6==0 && jd7==2 && jd8==2)
  {
    alert("GREAT WORK");
  }
  else
  {
    alert("RETRY");
  }
}
