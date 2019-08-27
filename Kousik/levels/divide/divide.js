var correct_answer="01122221122222112112211112221111200";
var correct_answer2="02211112211111221221122221112222100";
var answer_string="";
var background_color="D9B3FF";
var current_color="#D9B3FF";
var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"); 

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
function button_click(event){
	console.log(this.id);
	var region=document.getElementById(this.id);
	console.log(event.which);
	if(event.which==1){
		if(rgb2hex(region.style.backgroundColor)!=("#"+background_color)){
			region.style.background="#"+background_color;
			
		}
		else region.style.background="#0000FF";
	}
	else if(event.which==3){
		if(rgb2hex(region.style.backgroundColor)!=("#"+background_color)){
			region.style.background="#"+background_color;
			
		}
		else region.style.background="#FF0000";
	
	}
}

var n=35;
function check_answer(){
	
	for(var i=1;i<=n;i++){
		var check_region=document.getElementById("square"+i);
		var check_region_color=rgb2hex(check_region.style.backgroundColor);
		
		if(check_region_color=="#0000FF") answer_string+=1;
		else if(check_region_color=="#FF0000") answer_string+=2;
		else answer_string+=0;

	}
	
	console.log(answer_string);
	if(answer_string==correct_answer|| answer_string==correct_answer2){
		console.log("You won");
		
		alert("you won");
	}
	else{
		answer_string="";
		console.log("YOu lost");
		
		alert("You lost");
	}

}

var grid=document.getElementById("area-grid");
for(var iterator=1;iterator<=n;iterator++){


	var newelement=document.createElement('div');
	
	
	
	if(iterator==1|| iterator==34||iterator==35){
		newelement.classList.add("grid-item-empty");
		newelement.style.background="#FFFFFF";
	}
	else{
		newelement.classList.add("grid-item");
		newelement.style.background=current_color;
		newelement.onmousedown=button_click;
	}

	newelement.id="square"+iterator;
	grid.appendChild(newelement);

}
