var n=9;
numbers = [1,1,2,3,2,4,4,4,6,2,2,4,5,4,7,8,4,6,5,5,1,5,1,2,4,9,6,5,3,1,5,3,6,3,'A',5,1,5,'B',4,8,3,2,1,1,6,3,5,5,4,'A',3,5,9,5,7,7,8,3,4,2,'B',6,3,8,'B',3,5,3,2,'A',4,2,8,8,2,1,2,1,4,5];
selected_corners = [];

function click(){
	if(this.classList.contains("temp")){
	if(this.classList.contains("selected")){
		   this.style.background = "#ffff66";
		   this.classList.remove("selected");
		   selected_corners = [];
	}else {
	this.style.background = "grey";
	this.classList.add("selected");
	selected_corners.push(Number(this.id.slice(3)));
	if(selected_corners.length == 2) vanish(); 
	}	
				}
			}						  

function vanish(){
	if(document.getElementById("Box" + selected_corners[0]).textContent == document.getElementById("Box" + selected_corners[1]).textContent){	
		 var min = Math.min.apply(Math, selected_corners);  console.log(min);
         var max = Math.max.apply(Math, selected_corners);  console.log(max);
         		if((max-min)%n !=0  &&  (max-min)<(n-(min%n)) ){ for(var i= min; i<= max; i++) {
         		   																var b=document.getElementById("Box"+ i);
         		   																b.style.background = "grey"; 
         				 													    b.classList.remove("temp");  }         	
         		        				selected_corners=[];										    				 													    
         		   }else if((max-min)%n == 0) {for(var i= min; i<= max; i+=n){
         		   										var b=document.getElementById("Box"+ i);
         		   										b.style.background = "grey";
         		   										b.classList.remove("temp");    }         				 		
         		        		selected_corners=[];				            				 													    
         		   }
         		   		
         			else{
         				alert("Select only 2 boxes in a line");
            			for(var i=0; i<selected_corners.length; i++)  	document.getElementById("Box"+selected_corners[i]).style.background = "#ffff66";
            	  		selected_corners=[];

         			}
         	}else{
         			for(var i=0; i<selected_corners.length; i++)  	document.getElementById("Box"+selected_corners[i]).style.background = "#ffff66";
            	  	selected_corners=[];
         	}		
}

function submit(){
	if($(".box-container .temp").length > 0) alert("Make all grids vanish first!!");
	else alert(":)");
}



var box = document.querySelector(".box-container");
for (var i = 1; i<=n*n; i++){
	var newBox = document.createElement("div");
	var textBox = document.createElement("p");
	textBox.classList.add("text");
	newBox.appendChild(textBox);
	textBox.innerHTML= "<b>"+numbers[i-1] + "</b>";
	newBox.onclick = click;
	newBox.classList.add("innerBox");
	newBox.classList.add("temp");
	newBox.id = "Box"+ i;
	box.appendChild(newBox);

}