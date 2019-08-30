  var color="blue";
var alter=1;
var p=[];
var q=[];
var r=[];
var g=-1;
var h,x,g;
for(var j=0;j<81;j++){
	p.push(0);
}
for(var j=0;j<9;j++){
	q.push(0);
	r.push(0);
}
 // console.log(q);
var a=document.querySelectorAll(".col-lg-1");
function c(i)
{
  h=i;
  if(p[i]==0)
  {
  
  	if((g==0||g==3||g==6||g==27||g==30||g==33||g==54||g==57||g==60))
    {
      if((h>=0&&h<3)||(h>=9&&h<12)||(h>=18&&h<21)){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
      else if(r[0]==1){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {

            
          color="blue";
          p[i]=2;
          }
          g=i;
      }
    }
  	else if((g==1||g==4||g==7||g==28||g==31||g==34||g==55||g==58||g==61))
    {
      if((h>=3&&h<6)||(h>=12&&h<15)||(h>=21&&h<24)){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
      else if(r[1]==1){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
    }   
    else if((g==2||g==5||g==8||g==29||g==32||g==35||g==56||g==59||g==62))
    {
      if((h>=6&&h<9)||(h>=15&&h<18)||(h>=24&&h<27)){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
      else if(r[2]==1){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
    }   
     else if((g==9||g==12||g==15||g==36||g==39||g==42||g==63||g==66||g==69))
    {
      if((h>=27&&h<30)||(h>=36&&h<39)||(h>=45&&h<48)){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
      else if(r[3]==1){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
    }
      else if((g==10||g==13||g==16||g==37||g==40||g==43||g==64||g==67||g==70))
    {
      if((h>=30&&h<33)||(h>=39&&h<42)||(h>=48&&h<51)){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
      else if(r[4]==1){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
    }   
      else if((g==11||g==14||g==17||g==38||g==41||g==44||g==65||g==68||g==71))
    {
      if((h>=33&&h<36)||(h>=42&&h<45)||(h>=51&&h<54)){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
      else if(r[5]==1){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
    }   
      else if((g==18||g==21||g==24||g==45||g==48||g==51||g==72||g==75||g==78))
    {
      if((h>=54&&h<57)||(h>=63&&h<66)||(h>=72&&h<75)){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
      else if(r[6]==1){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
    }      
     else if((g==19||g==22||g==25||g==46||g==49||g==52||g==73||g==76||g==79))
    {
      if((h>=57&&h<60)||(h>=66&&h<69)||(h>=75&&h<78)){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
      else if(r[7]==1){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
    }      
     else if((g==20||g==23||g==26||g==47||g==50||g==53||g==74||g==77||g==80))
    {
      console.log("yoy");
      if((h>=60&&h<63)||(h>=69&&h<72)||(h>=78&&h<81)){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
      else if(r[8]==1){
        a[i].style.background=color;
        alter+=1;
        if(alter%2==0)
          {
          color="pink";
          p[i]=1;
          }
        else
          {
          color="blue";
          p[i]=2;
          }
          g=i;
      }
    }  
    else if(g==-1){
     a[i].style.background=color;
     alter+=1;
     if(alter%2==0)
      {
      color="pink";
      p[i]=1;
      }
     else
      {
      color="blue";
      p[i]=2;
      }
      g=i;

    } 

  }
  
  check();
}

a.forEach(function(button, index) {
  button.addEventListener('click', function() {
    c(index);
  });
});


 function check()
  {
  	//box1
  var box;
  if((p[0]==1&&p[9]==1&&p[18]==1)||(p[1]==1&&p[10]==1&&p[19]==1)||(p[2]==1&&p[11]==1&&p[20]==1)||(p[0]==1&&p[1]==1&&p[2]==1)||(p[9]==1&&p[10]==1&&p[11]==1)||(p[18]==1&&p[19]==1&&p[20]==1)||(p[0]==1&&p[10]==1&&p[20]==1)||(p[2]==1&&p[10]==1&&p[18]==1))
  {
	for(var i=0;i<3;i++){ a[i].style.background="blue";	p[i]=1;}
	for(var i=9;i<12;i++){a[i].style.background="blue";	p[i]=1;}
	for(var i=18;i<21;i++){a[i].style.background="blue";p[i]=1;}
	q[0]=1;
    r[0]=1;
	final();
  }
  // console.log("hi");

if((p[0]==2&&p[9]==2&&p[18]==2)||(p[1]==2&&p[10]==2&&p[19]==2)||(p[2]==2&&p[11]==2&&p[20]==2)||(p[0]==2&&p[1]==2&&p[2]==2)||(p[9]==2&&p[10]==2&&p[11]==2)||(p[18]==2&&p[19]==2&&p[20]==2)||(p[0]==2&&p[10]==2&&p[20]==2)||(p[2]==2&&p[10]==2&&p[18]==2))
  {
	for(var i=0;i<3;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=9;i<12;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=18;i<21;i++){a[i].style.background="pink";p[i]=2;}
	q[0]=2;
    r[0]=1;
	final();
  }
  // console.log("hi");
  //box2
  if((p[3]==1&&p[12]==1&&p[21]==1)||(p[4]==1&&p[13]==1&&p[22]==1)||(p[5]==1&&p[14]==1&&p[23]==1)||(p[3]==1&&p[4]==1&&p[5]==1)||(p[12]==1&&p[13]==1&&p[14]==1)||(p[21]==1&&p[22]==1&&p[23]==1)||(p[3]==1&&p[13]==1&&p[23]==1)||(p[5]==1&&p[13]==1&&p[21]==1))
  {
	for(var i=3;i<6;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=12;i<15;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=21;i<24;i++){ a[i].style.background="blue";p[i]=1;}
	q[1]=1;
    r[1]=1;
	final();
  }
  if((p[3]==2&&p[12]==2&&p[21]==2)||(p[4]==2&&p[13]==2&&p[22]==2)||(p[5]==2&&p[14]==2&&p[23]==2)||(p[3]==2&&p[4]==2&&p[5]==2)||(p[12]==2&&p[13]==2&&p[14]==2)||(p[21]==2&&p[22]==2&&p[23]==2)||(p[3]==2&&p[13]==2&&p[23]==2)||(p[5]==2&&p[13]==2&&p[21]==2))
  {
	for(var i=3;i<6;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=12;i<15;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=21;i<24;i++){a[i].style.background="pink";p[i]=2;}
	q[1]=2;
    r[1]=1;
	final();
  }
   //box3
   if((p[6]==1&&p[15]==1&&p[24]==1)||(p[7]==1&&p[16]==1&&p[25]==1)||(p[8]==1&&p[17]==1&&p[26]==1)||(p[6]==1&&p[7]==1&&p[8]==1)||(p[15]==1&&p[16]==1&&p[17]==1)||(p[24]==1&&p[25]==1&&p[26]==1)||(p[6]==1&&p[16]==1&&p[26]==1)||(p[8]==1&&p[16]==1&&p[24]==1))
  {
	for(var i=6;i<9;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=15;i<18;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=24;i<27;i++){a[i].style.background="blue";p[i]=1;}
	q[2]=1;
    r[2]=1;
	final();
  }
  if((p[6]==2&&p[15]==2&&p[24]==2)||(p[7]==2&&p[16]==2&&p[25]==2)||(p[8]==2&&p[17]==2&&p[26]==2)||(p[6]==2&&p[7]==2&&p[8]==2)||(p[15]==2&&p[16]==2&&p[17]==2)||(p[24]==2&&p[25]==2&&p[26]==2)||(p[6]==2&&p[16]==2&&p[26]==2)||(p[8]==2&&p[16]==2&&p[24]==2))
  {
	for(var i=6;i<9;i++){ a[i].style.background="pink";p[i]=2;}
	for(var i=15;i<18;i++){ a[i].style.background="pink";p[i]=2;}
	for(var i=24;i<27;i++){ a[i].style.background="pink";p[i]=2;}
	q[2]=2;
    r[2]=1;
	final();
  }
  //box4
  if((p[27]==1&&p[36]==1&&p[45]==1)||(p[28]==1&&p[37]==1&&p[46]==1)||(p[29]==1&&p[38]==1&&p[47]==1)||(p[27]==1&&p[28]==1&&p[29]==1)||(p[36]==1&&p[37]==1&&p[38]==1)||(p[45]==1&&p[46]==1&&p[47]==1)||(p[27]==1&&p[37]==1&&p[47]==1)||(p[29]==1&&p[37]==1&&p[45]==1))
  {
	for(var i=27;i<30;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=36;i<39;i++){ a[i].style.background="blue";p[i]=1;}
	for(var i=45;i<48;i++){a[i].style.background="blue";p[i]=1;}
	q[3]=1;
    r[3]=1;
	final();
  }
   if((p[27]==2&&p[36]==2&&p[45]==2)||(p[28]==2&&p[37]==2&&p[46]==2)||(p[29]==2&&p[38]==2&&p[47]==2)||(p[27]==2&&p[28]==2&&p[29]==2)||(p[36]==2&&p[37]==2&&p[38]==2)||(p[45]==2&&p[46]==2&&p[47]==2)||(p[27]==2&&p[37]==2&&p[47]==2)||(p[29]==2&&p[37]==2&&p[45]==2))
  {
	for(var i=27;i<30;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=36;i<39;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=45;i<48;i++){a[i].style.background="pink";p[i]=2;}
	q[3]=2;
    r[3]=1;
	final();
  }
  //box5
   if((p[30]==1&&p[39]==1&&p[48]==1)||(p[31]==1&&p[40]==1&&p[49]==1)||(p[32]==1&&p[41]==1&&p[50]==1)||(p[30]==1&&p[31]==1&&p[32]==1)||(p[39]==1&&p[40]==1&&p[41]==1)||(p[48]==1&&p[49]==1&&p[50]==1)||(p[30]==1&&p[40]==1&&p[50]==1)||(p[32]==1&&p[40]==1&&p[48]==1))
  {
	for(var i=30;i<33;i++){ a[i].style.background="blue";p[i]=1;}
	for(var i=39;i<42;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=48;i<51;i++){a[i].style.background="blue";p[i]=1;}
	q[4]=1;
    r[4]=1;
	final();
  }
   if((p[30]==2&&p[39]==2&&p[48]==2)||(p[31]==2&&p[40]==2&&p[49]==2)||(p[32]==2&&p[41]==2&&p[50]==2)||(p[30]==2&&p[31]==2&&p[32]==2)||(p[39]==2&&p[40]==2&&p[41]==2)||(p[48]==2&&p[49]==2&&p[50]==2)||(p[30]==2&&p[40]==2&&p[50]==2)||(p[32]==2&&p[40]==2&&p[48]==2))
  {
	for(var i=30;i<33;i++){ a[i].style.background="pink";p[i]=2;}
	for(var i=39;i<42;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=48;i<51;i++){a[i].style.background="pink";p[i]=2;}
	q[4]=2;
    r[4]=1;
	final();
  }
  //box6
  if((p[33]==1&&p[42]==1&&p[51]==1)||(p[34]==1&&p[43]==1&&p[52]==1)||(p[35]==1&&p[44]==1&&p[53]==1)||(p[33]==1&&p[34]==1&&p[35]==1)||(p[42]==1&&p[43]==1&&p[44]==1)||(p[51]==1&&p[52]==1&&p[53]==1)||(p[33]==1&&p[43]==1&&p[53]==1)||(p[35]==1&&p[43]==1&&p[51]==1))
  {
	for(var i=33;i<36;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=42;i<45;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=51;i<54;i++){ a[i].style.background="blue";p[i]=1;}
	q[5]=1;
    r[5]=1;
	final();
  }
  if((p[33]==2&&p[42]==2&&p[51]==2)||(p[34]==2&&p[43]==2&&p[52]==2)||(p[35]==2&&p[44]==2&&p[53]==2)||(p[33]==2&&p[34]==2&&p[35]==2)||(p[42]==2&&p[43]==2&&p[44]==2)||(p[51]==2&&p[52]==2&&p[53]==2)||(p[33]==2&&p[43]==2&&p[53]==2)||(p[35]==2&&p[43]==2&&p[51]==2))
  {
	for(var i=33;i<36;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=42;i<45;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=51;i<54;i++){a[i].style.background="pink";p[i]=2;}
	q[5]=2;
    r[5]=1;
	final();
  }
  //box7
  if((p[54]==1&&p[63]==1&&p[72]==1)||(p[55]==1&&p[64]==1&&p[73]==1)||(p[56]==1&&p[65]==1&&p[74]==1)||(p[54]==1&&p[55]==1&&p[56]==1)||(p[63]==1&&p[64]==1&&p[68]==1)||(p[72]==1&&p[73]==1&&p[74]==1)||(p[54]==1&&p[64]==1&&p[74]==1)||(p[56]==1&&p[64]==1&&p[72]==1))
  {
	for(var i=54;i<57;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=63;i<66;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=72;i<75;i++){ a[i].style.background="blue";p[i]=1;}
	q[6]=1;
    r[6]=1;
	final();
  }
  if((p[54]==2&&p[63]==2&&p[72]==2)||(p[55]==2&&p[64]==2&&p[73]==2)||(p[56]==2&&p[65]==2&&p[74]==2)||(p[54]==2&&p[55]==2&&p[56]==2)||(p[63]==2&&p[64]==2&&p[68]==2)||(p[72]==2&&p[73]==2&&p[74]==2)||(p[54]==2&&p[64]==2&&p[74]==2)||(p[56]==2&&p[64]==2&&p[72]==2))
  {
	for(var i=54;i<57;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=63;i<66;i++){	a[i].style.background="pink";p[i]=2;}
	for(var i=72;i<75;i++){a[i].style.background="pink";p[i]=2;}
	q[6]=2;
    r[6]=1;
	final();
  }
  //box8
   if((p[57]==1&&p[66]==1&&p[75]==1)||(p[58]==1&&p[67]==1&&p[76]==1)||(p[59]==1&&p[68]==1&&p[77]==1)||(p[57]==1&&p[58]==1&&p[59]==1)||(p[66]==1&&p[67]==1&&p[68]==1)||(p[75]==1&&p[76]==1&&p[77]==1)||(p[57]==1&&p[67]==1&&p[77]==1)||(p[59]==1&&p[67]==1&&p[75]==1))
  {
	for(var i=57;i<60;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=66;i<69;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=75;i<78;i++){a[i].style.background="blue";p[i]=1;}
	q[7]=1;
    r[7]=1;
	final();
  }
  if((p[57]==2&&p[66]==2&&p[75]==2)||(p[58]==2&&p[67]==2&&p[76]==2)||(p[59]==2&&p[68]==2&&p[77]==2)||(p[57]==2&&p[58]==2&&p[59]==2)||(p[66]==2&&p[67]==2&&p[68]==2)||(p[75]==2&&p[76]==2&&p[77]==2)||(p[57]==2&&p[67]==2&&p[77]==2)||(p[59]==2&&p[67]==2&&p[75]==2))
  {
	for(var i=57;i<60;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=66;i<69;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=75;i<78;i++){a[i].style.background="pink";p[i]=2;}
	q[7]=2;
    r[7]=1;
	final();
  }
  //box9
  if((p[60]==1&&p[69]==1&&p[78]==1)||(p[61]==1&&p[70]==1&&p[79]==1)||(p[62]==1&&p[71]==1&&p[80]==1)||(p[60]==1&&p[61]==1&&p[62]==1)||(p[69]==1&&p[70]==1&&p[71]==1)||(p[78]==1&&p[79]==1&&p[80]==1)||(p[60]==1&&p[70]==1&&p[80]==1)||(p[62]==1&&p[70]==1&&p[78]==1))
 {
	for(var i=60;i<63;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=69;i<72;i++){a[i].style.background="blue";p[i]=1;}
	for(var i=78;i<81;i++){a[i].style.background="blue";p[i]=1;}
	q[8]=1;
    r[8]=1;
	final();
  }
  if((p[60]==2&&p[69]==2&&p[78]==2)||(p[61]==2&&p[70]==2&&p[79]==2)||(p[62]==2&&p[71]==2&&p[80]==2)||(p[60]==2&&p[61]==2&&p[62]==2)||(p[69]==2&&p[70]==2&&p[71]==2)||(p[78]==2&&p[79]==2&&p[80]==2)||(p[60]==2&&p[70]==2&&p[80]==2)||(p[62]==2&&p[70]==2&&p[78]==2))
 {
	for(var i=60;i<63;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=69;i<72;i++){a[i].style.background="pink";p[i]=2;}
	for(var i=78;i<81;i++){ a[i].style.background="pink";p[i]=2;}
	q[8]=2;
    r[8]=1;
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
  else{
    var drawcheck=1;
    
    for(var iter=0;iter<81;iter++){
      if(p[iter]==0){
        drawcheck=0;
        break;
      }
    }
    console.log("draw"+drawcheck);
    if(drawcheck==1) alert("draw");
  }
	
}










