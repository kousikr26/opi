var clicks=0;

var background_color="D9B3FF";
var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"); 
var answer_string="";
var correct_answer="1111101111111100011111001000100100011100010100100111101011011111100111101100101110000001111001110111";
var hints={
	1:"<div style=\"font-size: 50px\" class=\"glyphicon glyphicon-fire\"></div>",
	2:"3<br>5",
	3:"7",
	4:"2<br>3",
	5:"2<br>1<br>2<br>1",
	6:"1<br>1<br>2<br>1",
	7:"1<br>1",
	8:"1<br>3<br>1",
	9:"2<br>1<br>2<br>2",
	10:"3<br>4",
	11:"2<br>6",
	12:"5 4",
	23:"4 3",
	34:"2 1 1",
	45:"1 3",
	56:"1 1 1 1",
	67:"3 1 2 1",
	78:"5 3",
	89:"1 2 1 2",
	100:"1 3",
	111:"1 3 3",
};



function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }

function button_click(){
	console.log(this.id);
	var region=document.getElementById(this.id);
	
	if(rgb2hex(region.style.backgroundColor)!=("#"+background_color)){
		region.style.background="#"+background_color;
		clicks++;
	}
	else region.style.background="#000000";

}

var n=121;
var grid=document.getElementById("area-grid");
for(var iterator=1;iterator<=n;iterator++){
	var idvalue=0;

	var newelement=document.createElement('div');
	
	if(iterator<=Math.sqrt(n) || iterator%Math.sqrt(n)==1){
		newelement.classList.add("grid-item");
		newelement.id="info"+iterator;
		newelement.style.background="#EB4E9F";
		newelement.innerHTML=hints[iterator];
		grid.appendChild(newelement);
	}
	else{
		idvalue=iterator-(Math.sqrt(n)+1);
		idvalue-=Math.floor(idvalue/Math.sqrt(n));
		

		newelement.classList.add("grid-item");
		newelement.id="square"+idvalue;
		newelement.style.background="#D9B3FF";
		newelement.onclick=button_click
		grid.appendChild(newelement);
	}
}

function check_answer(){
	var new_n=(Math.sqrt(n)-1)*(Math.sqrt(n)-1);
	for(var i=1;i<=new_n;i++){
		var check_region=document.getElementById("square"+i);
		var check_region_color=rgb2hex(check_region.style.backgroundColor);
		console.log("check"+check_region_color);
		if(check_region_color=="#000000") answer_string+=1;
		else answer_string+=0;

	}
	
	console.log(answer_string);
	if(answer_string==correct_answer){
		console.log("You won");
		console.log(clicks);
		alert("you won");
	}
	else{
		answer_string="";
		console.log("YOu lost");
		console.log(clicks);
		alert("You lost");
	}

}