var a=[0,0];


//function drawCanvas() {
	var grid=document.getElementById("grid");

	for(var i=1;i<=100;i++)
	{
		var a=document.createElement('div');
	//	var c=document.createElement('div');
		var b=document.createElement('button');
		b.id=i;
		//b.onclick
		a.classList.add("grid-item");
		b.classList.add("button");
		b.innerHTML='12';
		b.onclick=button_click;
		a.appendChild(b);
		grid.appendChild(a);
	}
/*
	x=document.getElementById("canvas").getBoundingClientRect().left;
	y=document.getElementById("canvas").getBoundingClientRect().top;
	x2=x+document.getElementById("canvas").getBoundingClientRect().width;
	y2=y+document.getElementById("canvas").getBoundingClientRect().height;
	alert(x+"\n"+y+"\n"+x2+"\n"+y2);
*/

	
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																									
function button_click(){
	if(!a[0]){
		a[0]=this.id;
	}
	else{
		a[1]=this.id;
		x=document.getElementById(a[0]).getBoundingClientRect().left+0.5*document.getElementById(a[0]).getBoundingClientRect().width;
	y=document.getElementById(a[0]).getBoundingClientRect().top+0.5*document.getElementById(a[0]).getBoundingClientRect().height;
	//xright=document.getElementById(a[0]).getBoundingClientRect().width;
	x2=document.getElementById(a[1]).getBoundingClientRect().left+0.5*document.getElementById(a[1]).getBoundingClientRect().width;
	y2=document.getElementById(a[1]).getBoundingClientRect().top+0.5*document.getElementById(a[1]).getBoundingClientRect().height;
	//alert(x+"\n"+y+"\n"+x2+"\n"+y2);
	a[0]=0;
	a[1]=0;
	var c=document.getElementById("canvas");
	if(c.getContext){
		var ctx=c.getContext("2d");

		ctx.beginPath();
		ctx.moveTo(x-1300,y);
		ctx.lineTo(x2-1300,y2);
		ctx.stroke();
	}
	console.log("jhjsdhbdb");	

	}

}
