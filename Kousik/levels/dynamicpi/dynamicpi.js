var a=[3,1,4,1,5,9,2,6,5];
var b=[6,2,8,3,1,8,5,3,0];

var color_array=["#00FF00","#0000FF","#FFFF00","#FFFFFF"];

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




var n=9;
var grid=document.getElementById("area-grid");
for(var i=1;i<=n;i++){
	for(var j=1;j<=n;j++){

		var newelement=document.createElement('div');




		newelement.classList.add("grid-item");
		newelement.id="square"+i+j;

		if(j<=a[i-1]){

			if(i<=b[j-1]){

				newelement.style.background=color_array[0];
			}
			else{
				newelement.style.background=color_array[1];	
			}

		}
		else{
			if(i<=b[j-1]){
				newelement.style.background=color_array[2];
			}
			else{
				newelement.style.background=color_array[3];	
			}

		}
		

		grid.appendChild(newelement);
	}
}
