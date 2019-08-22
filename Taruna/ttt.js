alert("connected");
var a=[];var x;var y="blue";var z=1;var p=[];var q=[];
for(var i=0;i<81;i++){
	p.push(0);
}
for(var i=0;i<9;i++){
	q.push(0);
}
 // console.log(q);
var a=document.querySelectorAll(".col-lg-1");



function c(i){
  
  if(p[i]==0){
    a[i].style.background=y; z+=1;
    if(z%2==0){
      y="pink";
      p[i]=1;
    }
    else{
      y="blue";
      p[i]=2;
    }
  }
  check();
}
a.forEach(function(button, index) {
  button.addEventListener('click', function() {
    c(index);
  });
});


  
  console.log(p[0]) 
  function check()
  {
  	//box1
  if((p[0]==1&&p[9]==1&&p[18]==1)||(p[1]==1&&p[10]==1&&p[19]==1)||(p[2]==1&&p[11]==1&&p[20]==1)||(p[0]==1&&p[1]==1&&p[2]==1)||(p[9]==1&&p[10]==1&&p[11]==1)||(p[18]==1&&p[19]==1&&p[20]==1)||(p[0]==1&&p[10]==1&&p[20]==1)||(p[2]==1&&p[10]==1&&p[18]==1))
  {
	for(var i=0;i<3;i++){ a[i].style.background="blue";	}
	for(var i=9;i<12;i++){a[i].style.background="blue";	}
	for(var i=18;i<21;i++){a[i].style.background="blue";}
	q[0]=1;
	final();
  }
  // console.log("hi");

if((p[0]==2&&p[9]==2&&p[18]==2)||(p[1]==2&&p[10]==2&&p[19]==2)||(p[2]==2&&p[11]==2&&p[20]==2)||(p[0]==2&&p[1]==2&&p[2]==2)||(p[9]==2&&p[10]==2&&p[11]==2)||(p[18]==2&&p[19]==2&&p[20]==2)||(p[0]==2&&p[10]==2&&p[20]==2)||(p[2]==2&&p[10]==2&&p[18]==2))
  {
	for(var i=0;i<3;i++){a[i].style.background="pink";}
	for(var i=9;i<12;i++){a[i].style.background="pink";	}
	for(var i=18;i<21;i++){a[i].style.background="pink";}
	q[0]=2;
	final();
  }
  // console.log("hi");
  //box2
  if((p[3]==1&&p[12]==1&&p[21]==1)||(p[4]==1&&p[13]==1&&p[22]==1)||(p[5]==1&&p[14]==1&&p[23]==1)||(p[3]==1&&p[4]==1&&p[5]==1)||(p[12]==1&&p[13]==1&&p[14]==1)||(p[21]==1&&p[22]==1&&p[23]==1)||(p[3]==1&&p[13]==1&&p[23]==1)||(p[5]==1&&p[13]==1&&p[21]==1))
  {
	for(var i=3;i<6;i++){a[i].style.background="blue";}
	for(var i=12;i<15;i++){a[i].style.background="blue";}
	for(var i=21;i<24;i++){ a[i].style.background="blue";}
	q[1]=1;
	final();
  }
  if((p[3]==2&&p[12]==2&&p[21]==2)||(p[4]==2&&p[13]==2&&p[22]==2)||(p[5]==2&&p[14]==2&&p[23]==2)||(p[3]==2&&p[4]==2&&p[5]==2)||(p[12]==2&&p[13]==2&&p[14]==2)||(p[21]==2&&p[22]==2&&p[23]==2)||(p[3]==2&&p[13]==2&&p[23]==2)||(p[5]==2&&p[13]==2&&p[21]==2))
  {
	for(var i=3;i<6;i++){a[i].style.background="pink";}
	for(var i=12;i<15;i++){a[i].style.background="pink";}
	for(var i=21;i<24;i++){a[i].style.background="pink";}
	q[1]=2;
	final();
  }
   //box3
   if((p[6]==1&&p[15]==1&&p[24]==1)||(p[7]==1&&p[16]==1&&p[25]==1)||(p[8]==1&&p[17]==1&&p[26]==1)||(p[6]==1&&p[7]==1&&p[8]==1)||(p[15]==1&&p[16]==1&&p[17]==1)||(p[24]==1&&p[25]==1&&p[26]==1)||(p[6]==1&&p[16]==1&&p[26]==1)||(p[8]==1&&p[16]==1&&p[24]==1))
  {
	for(var i=6;i<9;i++){a[i].style.background="blue";}
	for(var i=15;i<18;i++){a[i].style.background="blue";}
	for(var i=24;i<27;i++){a[i].style.background="blue";}
	q[2]=1;
	final();
  }
  if((p[6]==2&&p[15]==2&&p[24]==2)||(p[7]==2&&p[16]==2&&p[25]==2)||(p[8]==2&&p[17]==2&&p[26]==2)||(p[6]==2&&p[7]==2&&p[8]==2)||(p[15]==2&&p[16]==2&&p[17]==2)||(p[24]==2&&p[25]==2&&p[26]==2)||(p[6]==2&&p[16]==2&&p[26]==2)||(p[8]==2&&p[16]==2&&p[24]==2))
  {
	for(var i=6;i<9;i++){ a[i].style.background="pink";	}
	for(var i=15;i<18;i++){ a[i].style.background="pink";}
	for(var i=24;i<27;i++){ a[i].style.background="pink";}
	q[2]=2;
	final();
  }
  //box4
  if((p[27]==1&&p[36]==1&&p[45]==1)||(p[28]==1&&p[37]==1&&p[46]==1)||(p[29]==1&&p[38]==1&&p[47]==1)||(p[27]==1&&p[28]==1&&p[29]==1)||(p[36]==1&&p[37]==1&&p[38]==1)||(p[45]==1&&p[46]==1&&p[47]==1)||(p[27]==1&&p[37]==1&&p[47]==1)||(p[29]==1&&p[37]==1&&p[45]==1))
  {
	for(var i=27;i<30;i++){a[i].style.background="blue";}
	for(var i=36;i<39;i++){ a[i].style.background="blue";}
	for(var i=45;i<48;i++){a[i].style.background="blue";}
	q[3]=1;
	final();
  }
   if((p[27]==2&&p[36]==2&&p[45]==2)||(p[28]==2&&p[37]==2&&p[46]==2)||(p[29]==2&&p[38]==2&&p[47]==2)||(p[27]==2&&p[28]==2&&p[29]==2)||(p[36]==2&&p[37]==2&&p[38]==2)||(p[45]==2&&p[46]==2&&p[47]==2)||(p[27]==2&&p[37]==2&&p[47]==2)||(p[29]==2&&p[37]==2&&p[45]==2))
  {
	for(var i=27;i<30;i++){a[i].style.background="pink";}
	for(var i=36;i<39;i++){a[i].style.background="pink";}
	for(var i=45;i<48;i++){a[i].style.background="pink";}
	q[3]=2;
	final();
  }
  //box5
   if((p[30]==1&&p[39]==1&&p[48]==1)||(p[31]==1&&p[40]==1&&p[49]==1)||(p[32]==1&&p[41]==1&&p[50]==1)||(p[30]==1&&p[31]==1&&p[32]==1)||(p[39]==1&&p[40]==1&&p[41]==1)||(p[48]==1&&p[49]==1&&p[50]==1)||(p[30]==1&&p[40]==1&&p[50]==1)||(p[32]==1&&p[40]==1&&p[48]==1))
  {
	for(var i=30;i<33;i++){ a[i].style.background="blue";}
	for(var i=39;i<42;i++){a[i].style.background="blue";}
	for(var i=48;i<51;i++){a[i].style.background="blue";}
	q[4]=1;
	final();
  }
   if((p[30]==2&&p[39]==2&&p[48]==2)||(p[31]==2&&p[40]==2&&p[49]==2)||(p[32]==2&&p[41]==2&&p[50]==2)||(p[30]==2&&p[31]==2&&p[32]==2)||(p[39]==2&&p[40]==2&&p[41]==2)||(p[48]==2&&p[49]==2&&p[50]==2)||(p[30]==2&&p[40]==2&&p[50]==2)||(p[32]==2&&p[40]==2&&p[48]==2))
  {
	for(var i=30;i<33;i++){ a[i].style.background="pink";}
	for(var i=39;i<42;i++){a[i].style.background="pink";}
	for(var i=48;i<51;i++){a[i].style.background="pink";}
	q[4]=2;
	final();
  }
  //box6
  if((p[33]==1&&p[42]==1&&p[51]==1)||(p[34]==1&&p[43]==1&&p[52]==1)||(p[35]==1&&p[44]==1&&p[53]==1)||(p[33]==1&&p[34]==1&&p[35]==1)||(p[42]==1&&p[43]==1&&p[44]==1)||(p[51]==1&&p[52]==1&&p[53]==1)||(p[33]==1&&p[43]==1&&p[53]==1)||(p[35]==1&&p[43]==1&&p[51]==1))
  {
	for(var i=33;i<36;i++){a[i].style.background="blue";}
	for(var i=42;i<45;i++){a[i].style.background="blue";}
	for(var i=51;i<54;i++){ a[i].style.background="blue";}
	q[5]=1;
	final();
  }
  if((p[33]==2&&p[42]==2&&p[51]==2)||(p[34]==2&&p[43]==2&&p[52]==2)||(p[35]==2&&p[44]==2&&p[53]==2)||(p[33]==2&&p[34]==2&&p[35]==2)||(p[42]==2&&p[43]==2&&p[44]==2)||(p[51]==2&&p[52]==2&&p[53]==2)||(p[33]==2&&p[43]==2&&p[53]==2)||(p[35]==2&&p[43]==2&&p[51]==2))
  {
	for(var i=33;i<36;i++){a[i].style.background="pink";}
	for(var i=42;i<45;i++){a[i].style.background="pink";}
	for(var i=51;i<54;i++){a[i].style.background="pink";}
	q[5]=2;
	final();
  }
  //box7
  if((p[54]==1&&p[63]==1&&p[72]==1)||(p[55]==1&&p[64]==1&&p[73]==1)||(p[56]==1&&p[65]==1&&p[74]==1)||(p[54]==1&&p[55]==1&&p[56]==1)||(p[63]==1&&p[64]==1&&p[68]==1)||(p[72]==1&&p[73]==1&&p[74]==1)||(p[54]==1&&p[64]==1&&p[74]==1)||(p[56]==1&&p[64]==1&&p[72]==1))
  {
	for(var i=54;i<57;i++){a[i].style.background="blue";}
	for(var i=63;i<66;i++){a[i].style.background="blue";}
	for(var i=72;i<75;i++){ a[i].style.background="blue";}
	q[6]=1;
	final();
  }
  if((p[54]==2&&p[63]==2&&p[72]==2)||(p[55]==2&&p[64]==2&&p[73]==2)||(p[56]==2&&p[65]==2&&p[74]==2)||(p[54]==2&&p[55]==2&&p[56]==2)||(p[63]==2&&p[64]==2&&p[68]==2)||(p[72]==2&&p[73]==2&&p[74]==2)||(p[54]==2&&p[64]==2&&p[74]==2)||(p[56]==2&&p[64]==2&&p[72]==2))
  {
	for(var i=54;i<57;i++){a[i].style.background="pink";}
	for(var i=63;i<66;i++){	a[i].style.background="pink";}
	for(var i=72;i<75;i++){a[i].style.background="pink";}
	q[6]=2;
	final();
  }
  //box8
   if((p[57]==1&&p[66]==1&&p[75]==1)||(p[58]==1&&p[67]==1&&p[76]==1)||(p[59]==1&&p[68]==1&&p[77]==1)||(p[57]==1&&p[58]==1&&p[59]==1)||(p[66]==1&&p[67]==1&&p[71]==1)||(p[75]==1&&p[76]==1&&p[77]==1)||(p[57]==1&&p[67]==1&&p[77]==1)||(p[59]==1&&p[67]==1&&p[75]==1))
  {
	for(var i=57;i<60;i++){a[i].style.background="blue";}
	for(var i=66;i<69;i++){a[i].style.background="blue";}
	for(var i=75;i<78;i++){a[i].style.background="blue";}
	q[7]=1;
	final();
  }
  if((p[57]==2&&p[66]==2&&p[75]==2)||(p[58]==2&&p[67]==2&&p[76]==2)||(p[59]==2&&p[68]==2&&p[77]==2)||(p[57]==2&&p[58]==2&&p[59]==2)||(p[66]==2&&p[67]==2&&p[71]==2)||(p[75]==2&&p[76]==2&&p[77]==2)||(p[57]==2&&p[67]==2&&p[77]==2)||(p[59]==2&&p[67]==2&&p[75]==2))
  {
	for(var i=57;i<60;i++){a[i].style.background="pink";}
	for(var i=66;i<69;i++){a[i].style.background="pink";}
	for(var i=75;i<78;i++){a[i].style.background="pink";}
	q[7]=2;
	final();
  }
  //box9
  if((p[60]==1&&p[69]==1&&p[78]==1)||(p[61]==1&&p[70]==1&&p[79]==1)||(p[62]==1&&p[71]==1&&p[80]==1)||(p[60]==1&&p[61]==1&&p[62]==1)||(p[69]==1&&p[70]==1&&p[74]==1)||(p[78]==1&&p[79]==1&&p[80]==1)||(p[60]==1&&p[70]==1&&p[80]==1)||(p[62]==1&&p[70]==1&&p[78]==1))
 {
	for(var i=60;i<63;i++){a[i].style.background="blue";}
	for(var i=69;i<72;i++){a[i].style.background="blue";}
	for(var i=78;i<81;i++){a[i].style.background="blue";}
	q[8]=1;
	final();
  }
  if((p[60]==2&&p[69]==2&&p[78]==2)||(p[61]==2&&p[70]==2&&p[79]==2)||(p[62]==2&&p[71]==2&&p[80]==2)||(p[60]==2&&p[61]==2&&p[62]==2)||(p[69]==2&&p[70]==2&&p[74]==2)||(p[78]==2&&p[79]==2&&p[80]==2)||(p[60]==2&&p[70]==2&&p[80]==2)||(p[62]==2&&p[70]==2&&p[78]==2))
 {
	for(var i=60;i<63;i++){a[i].style.background="pink";}
	for(var i=69;i<72;i++){a[i].style.background="pink";}
	for(var i=78;i<81;i++){ a[i].style.background="pink";}
	q[8]=2;
	final();
  }
}
function final(){
	if((q[0]==1&&q[3]==1&&q[6]==1)||(q[1]==1&&q[4]==1&&q[7]==1)||(q[2]==1&&q[5]==1&&q[8]==1)||(q[0]==1&&q[1]==1&&q[2]==1)||(q[3]==1&&q[4]==1&&q[5]==1)||(q[6]==1&&q[7]==1&&q[8]==1)||(q[0]==1&&q[4]==1&&q[8]==1)||(q[2]==1&&q[4]==1&&q[6]==1))
      {
      	for(var i=0;i<81;i++){
	    a[i].style.background="blue";	
	   }
	   alert("PLAYER1 WINS!!!");
      }
    else if((q[0]==2&&q[3]==2&&q[6]==2)||(q[1]==2&&q[4]==2&&q[7]==2)||(q[2]==2&&q[5]==2&&q[8]==2)||(q[0]==2&&q[1]==2&&q[2]==2)||(q[3]==2&&q[4]==2&&q[5]==2)||(q[6]==2&&q[7]==2&&q[8]==2)||(q[0]==2&&q[4]==2&&q[8]==2)||(q[2]==2&&q[4]==2&&q[6]==2))
      {
      	for(var i=0;i<81;i++){
	    a[i].style.background="pink";	
	   }
	   alert("PLAYER2 WINS!!!");
      }
	
}
