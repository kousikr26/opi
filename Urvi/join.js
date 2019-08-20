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

	x=document.getElementById("1").getBoundingClientRect().left;
	y=document.getElementById("1").getBoundingClientRect().top;
	x2=document.getElementById("14").getBoundingClientRect().left;
	y2=document.getElementById("14").getBoundingClientRect().top;
	alert(x+"\n"+y+"\n"+x2+"\n"+y2);

	var c=document.getElementById("canvas");
	if(c.getContext){
		var ctx=c.getContext("2d");

		ctx.beginPath();
		ctx.moveTo(x-1300,y);
		ctx.lineTo(x2-1300,y2);
		ctx.stroke();
	}
	console.log("jhjsdhbdb");	

																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																									
function func(){
}
