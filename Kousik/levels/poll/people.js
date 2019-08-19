var clicks=0;
var black_array=[2,4,12,14,15,16,23,25,27,28,29,30];
var color_array=["#E74C3C","#5DADE2","#52BE80","#F4D03F","#EB984E","D9B3FF"]
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
function grid_click()
{
	var clicked_cell=document.getElementById("square"+this.id.slice(3));
	if(rgb2hex(clicked_cell.style.backgroundColor)!=("#"+background_color)) clicked_cell.style.background="#"+background_color;
	else clicked_cell.style.background=current_color;
}
function button_click(){
	current_color=color_array[Number(this.id.charAt(this.id.length-1))-1];
}
function check_answer(){
	var region_numbers=[21,15,17,23,22];
	var hexregion_array=[];
	var region_array=[];
	var answer_string="";
	for(var i=0;i<5;i++){
		var region=document.getElementById("square"+region_numbers[i]);
		region_array.push(region);
		hexregion_array.push(rgb2hex(region.style.backgroundColor));
		if(rgb2hex(region.style.backgroundColor)==background_color){
			alert("All squares not filled");
		}
	}
	for(var i=1;i<=n;i++){
		var check_region=document.getElementById("square"+i);
		var check_region_color=rgb2hex(check_region.style.backgroundColor);
		var index=hexregion_array.indexOf(check_region_color);
		if(index==-1){
			alert("Color not found in array");
		}
		else if(index==5){
			alert("ALl colors are not filled");
		}
		else{
			answer_string+=index+1
		}
	}
	console.log(answer_string);
}
// CORRECT ANSWER 122233123334122534111544555544 REMOVE THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111
var buttons=document.getElementById('button-list');
for(var i=1;i<=5;i++){
	var button =document.createElement('button');
	button.id="button"+i;
	button.innerHTML="Pick color";
	button.onclick=button_click;
	button.classList.add("btn");
	button.classList.add("btn-lg");
	button.style.background=color_array[i-1];
	buttons.appendChild(button);
}
var n=30;
var grid=document.getElementById("area-grid");
for(var iterator=1;iterator<=n;iterator++){
	var newelement=document.createElement('div');
	var dotelement=document.createElement('div');
	dotelement.onclick=grid_click;
	if(black_array.includes(iterator)){
		dotelement.classList.add("black-circle");
	}
	else{
		dotelement.classList.add("white-circle");
	}
	dotelement.id="dot"+iterator;

	newelement.classList.add("grid-item");
	newelement.id="square"+iterator;
	newelement.style.background=current_color;
	newelement.appendChild(dotelement);
	grid.appendChild(newelement);
}
