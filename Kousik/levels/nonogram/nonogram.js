var clicks=0;

var background_color="D9B3FF";
var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"); 
var answer_string="";
var correct_answer="1111011110110000001100001";
var hints={
	1:"<div style=\"font-size: 50px\" class=\"glyphicon glyphicon-fire\"></div>",
	2:"3",
	3:"3",
	4:"2",
	5:"2<br>1",
	6:"2",
	7:"4",
	13:"4",
	19:"2",
	25:"2",
	31:"1"
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

var n=36;
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
		console.log("You lost");
		console.log(clicks);
		alert("You lost");
	}

}