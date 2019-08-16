var s=[1,1];
for(i=0;i<23;i++){
	s.push(1);
}
//console.log(status);
var grid=document.getElementById("dots");
for(var i=0;i<25;i++)
{
	var a=document.createElement('div');
	var dot=document.createElement('div');
	var b=document.createElement('button');
	b.id=i;
	
	b.onclick=dot_click;
	a.classList.add("grid-item");
	b.classList.add("button");
	b.classList.add("not_removed");
	dot.appendChild(b);
	a.appendChild(dot);
	grid.appendChild(a);
}
function dot_click(){
	//alert(this.id);
	document.getElementById(this.id).classList.toggle("not_removed");
	if(document.getElementById(this.id).classList.contains("not_removed")){
		console.log("not removed");
		s[this.id]=1;
	}
	else
	{
		console.log("removed");
		s[this.id]=0;
	}
	//document.getElementById(this.id).classList.add("removed");
}
	//document.getElementById(idid).classList.add("removed");

function check(){
	console.log(s);
	var c=0;
	for(var k=0;k<25;k++){
		c+=s[k];
	}	
	if(c==15){
		var  fail=0;
		while(1){
			    //check for 1x1 squses
    if(s[0] && s[1] && s[5] && s[6])
        { fail=1; break; }
    else if(s[1] && s[2] && s[6] && s[7])
        { fail=1; break; }
    else if(s[2] && s[3] && s[7] && s[8])
        { fail=1; break; }
    else if(s[3] && s[4] && s[8] && s[9])
        { fail=1; break; }
    else if(s[5] && s[6] && s[10] && s[11])
        { fail=1; break; }
    else if(s[6] && s[7] && s[11] && s[12])
        { fail=1; break; }
    else if(s[7] && s[8] && s[12] && s[13])
        { fail=1; break; }
    else if(s[8] && s[9] && s[13] && s[14])
        { fail=1; break; }
    else if(s[10] && s[11] && s[15] && s[16])
        { fail=1; break; }
    else if(s[11] && s[12] && s[16] && s[17])
        { fail=1; break; }
    else if(s[12] && s[13] && s[17] && s[18])
        { fail=1; break; }
    else if(s[13] && s[14] && s[18] && s[19])
        { fail=1; break; }
    else if(s[15] && s[16] && s[20] && s[21])
        { fail=1; break; }
    else if(s[16] && s[17] && s[21] && s[22])
        { fail=1; break; }
    else if(s[17] && s[18] && s[22] && s[23])
        { fail=1; break; }
    else if(s[18] && s[19] && s[23] && s[24])
        { fail=1; break; }

    //check for 2x2 squses
    else if(s[0] && s[2] && s[10] && s[12])
        { fail=1; break; }
    else if(s[1] && s[3] && s[11] && s[13])
        { fail=1; break; }
    else if(s[2] && s[4] && s[12] && s[14])
        { fail=1; break; }
    else if(s[5] && s[7] && s[15] && s[17])
        { fail=1; break; }
    else if(s[6] && s[8] && s[16] && s[18])
        { fail=1; break; }
    else if(s[7] && s[9] && s[17] && s[19])
        { fail=1; break; }
    else if(s[10] && s[12] && s[20] && s[22])
        { fail=1; break; }
    else if(s[11] && s[13] && s[21] && s[23])
        { fail=1; break; }
    else if(s[12] && s[14] && s[22] && s[24])
        { fail=1; break; }

    //check for 3x3 squses
    else if(s[0] && s[3] && s[15] && s[18])
        { fail=1; break; }
    else if(s[1] && s[4] && s[16] && s[19])
        { fail=1; break; }
    else if(s[5] && s[8] && s[20] && s[23])
        { fail=1; break; }
    else if(s[6] && s[9] && s[21] && s[24])
        { fail=1; break; }

    //check for the 4x4 squse
    else if(s[0] && s[4] && s[20] && s[24])
        { fail=1; break; }

    //check for 45deg 1x1 squses
    else if(s[1] && s[5] && s[7] && s[11])
        { fail=1; break; }
    else if(s[2] && s[6] && s[8] && s[12])
        { fail=1; break; }
    else if(s[3] && s[7] && s[9] && s[13])
        { fail=1; break; }
    else if(s[6] && s[10] && s[12] && s[16])
        { fail=1; break; }
    else if(s[7] && s[11] && s[13] && s[17])
        { fail=1; break; }
    else if(s[8] && s[12] && s[14] && s[18])
        { fail=1; break; }
    else if(s[11] && s[15] && s[17] && s[21])
        { fail=1; break; }
    else if(s[12] && s[16] && s[18] && s[22])
        { fail=1; break; }
    else if(s[13] && s[17] && s[19] && s[23])
        { fail=1; break; }

    //check for the 45deg 2x2 squse
    else if(s[2] && s[10] && s[14] && s[22])
        { fail=1; break; }

    //check for 30ish deg 1x1 squses
    else if(s[5] && s[2] && s[16] && s[13])
        { fail=1; break; }
    else if(s[6] && s[3] && s[17] && s[14])
        { fail=1; break; }
    else if(s[10] && s[7] && s[21] && s[18])
        { fail=1; break; }
    else if(s[11] && s[8] && s[22] && s[19])
        { fail=1; break; }
    else if(s[1] && s[10] && s[17] && s[8])
        { fail=1; break; }
    else if(s[2] && s[11] && s[18] && s[9])
        { fail=1; break; }
    else if(s[6] && s[15] && s[22] && s[13])
        { fail=1; break; }
    else if(s[7] && s[16] && s[23] && s[14])
        { fail=1; break; }

    //check for slanted 3x3 squses
    else if(s[5] && s[3] && s[21] && s[19])
        { fail=1; break; }
    else if(s[15] && s[1] && s[9] && s[23])
        { fail=1; break; }
    else{
    	//console.log(fail);
    	console.log("correct");
    	break;
    }
		}
		//console.log(fail);
		if(fail==1){
			console.log("Wrong ans");
		}
		

	}	
	else{
		console.log("wrong ");
	}
