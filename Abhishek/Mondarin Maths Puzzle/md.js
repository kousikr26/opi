var colors = ["#00ff00" , "#ff0000" , "#0000ff", "#666666", "#ffffff" , "#00ffff", "#cc00cc", "#cc0066", "#333300", "#ffff1a" ] ; 
var c = 0;
var n= 8;
var current_color = colors[c];
var selected_corners = [];
var newButton= document.getElementById("selectNewRectangle")
var instruction = document.querySelector(".instruction");
var scores = [];
var dimensions1 = [];
var dimensions2 = [];
var x= 0;
var y= 0;

function click(){
	selected_corners.push(Number(this.id.slice(3)));
    this.style.background = current_color;
    }

 function selectNewRectangle(){
 	    
 	    if(newButton.textContent == "Select New Rectangle"){
    	newButton.textContent = "Selected";
    	instruction.style.display = "inline-block";

        /*if(selected_corners.length == 2  || selected_corners.length == 4) newButton.textContent == "Selected";
        else newButton.textContent == "Select each corner of rectangle you want to select";
        if(newButton.textContent== "Selected") newButton.onclick=fillRectangle();
        while(selected_corners.length<4){
        	if(selected_corners.length==2 || selected_corners.length==4) {
        		newButton.textContent = "Selected";
                //newButton.onclick = break();
            }
            else if(selected_corners.length != 2 && selected_corners.length != 4){
            	newButton.textContent== "Select each corner(2 OR 4) of rectangle you want to select"
        }
            }*/
        }
         else if(newButton.textContent == "Selected") {
         	if(selected_corners.length==4){
         		var min = Math.min.apply(Math, selected_corners);  console.log(min);
         		var max = Math.max.apply(Math, selected_corners);  console.log(max);
         		var diff = (max-min)%n;                             console.log(diff);
         		var quotient = Math.floor((max-min)/8);

         		if(selected_corners.includes(min+diff) && selected_corners.includes(max-diff)){
         			for(var i=0; i<=n*quotient ; i+=n){
         				for(var j=0; j<=diff; j++){
         				   var b=document.getElementById("Box"+(min+i+j));
         				   b.style.background = current_color;
         				   b.classList.add(c);   
         				   b.classList.remove("temp");    				   
         				}         			
         			}    
         			scores.push((diff+1)*(quotient+1));	
         			dimensions1.push(diff+1);
					dimensions2.push(quotient+1);     			
         			current_color = colors[++c];
            	}else{
         			alert("Wrong Dimensions are selected. SELECT appropriate boxes for rectangle");
         			for(var i=0; i<4; i++)  	document.getElementById("Box"+selected_corners[i]).style.background = "#ffff66";     								
         		}
         	        	selected_corners=[];
         			    newButton.textContent = "Select New Rectangle";
         	} 
         	else if(selected_corners.length==1){
         		    var b=document.getElementById("Box"+ selected_corners[0]);
         		   	b.style.background = current_color;
         			b.classList.add(c);  
         			b.classList.remove("temp"); 
         			current_color = colors[++c];
         		   	selected_corners=[];
         			newButton.textContent = "Select New Rectangle";
         			scores.push(1);	
         			dimensions1.push(1);
					dimensions2.push(1); 

         	}
            else if(selected_corners.length==2){
         		      var min = Math.min.apply(Math, selected_corners);  console.log(min);
         			  var max = Math.max.apply(Math, selected_corners);  console.log(max);
         		   				if((max-min)%n !=0  &&  (max-min)<(n-(min%n)) ){ for(var i= min; i<= max; i++) {
         		   																var b=document.getElementById("Box"+ i);
         		   																b.style.background = current_color;
         				 													    b.classList.add(c); 
         				 													    b.classList.remove("temp"); 
         				 													    console.log(i); }
         				 				scores.push(max-min+1);									    		
         				 				current_color = colors[++c];
         				 				dimensions1.push(max-min);
										dimensions2.push(1);
         		        				selected_corners=[];
         			    				newButton.textContent = "Select New Rectangle";											    				 													    
         		   }else if((max-min)%n == 0) {for(var i= min; i<= max; i+=n){
         		   										var b=document.getElementById("Box"+ i);
         		   										b.style.background = current_color;
         		   										b.classList.remove("temp"); 
         				 							    b.classList.add(c);    }
         				 		scores.push((max-min)/n + 1);					    
         				 		current_color = colors[++c];
         				 		dimensions1.push(1);
								dimensions2.push((max-min)%8+1);
         		        		selected_corners=[];
         			    		newButton.textContent = "Select New Rectangle";					            				 													    
         		   }
         		   		
         			else{
         				alert("Select only 2 or 4 boxes with proper corner points!");
            			for(var i=0; i<selected_corners.length; i++)  	document.getElementById("Box"+selected_corners[i]).style.background = "#ffff66";
            	  		selected_corners=[];
         			    newButton.textContent = "Select New Rectangle";

         			}        
         			
            }
            else{
            	alert("Select only 2 or 4 boxes with proper corner points!");
            	for(var i=0; i<selected_corners.length; i++)  	document.getElementById("Box"+selected_corners[i]).style.background = "#ffff66";
            	  		selected_corners=[];
         			    newButton.textContent = "Select New Rectangle";

            }
         	}
    }   

function dimension_check(){
	for(var i= 0; i<dimensions1.length; i++){
		for(var j = i+1 ; j<dimensions1.length; j++){
				if(dimensions1[i]==dimensions1[j]) if(dimensions2[i]==dimensions2[j]) x=1;
		}
	}

}    

function check(){
	if($(".box-container .temp").length > 0){
		alert("Select all grids first..!");
	}else {
		dimension_check();
		if(x==0){
		var min_area = Math.min.apply(Math, scores);
 		var max_area = Math.max.apply(Math, scores);
 		var score = max_area - min_area;
 		document.getElementById("largest").textContent = max_area;
 		document.getElementById("smallest").textContent =  min_area;
 		document.getElementById("ans").textContent = score;
 		document.getElementById("submit").disabled= false;
		}else{
			alert("TWO RECTANGLES HAVE SAME DIMENSIONs!                   TRY AGAIN!!")
			location.reload();
			}
		}
	}

function submit(){
	alert(":)")
}	

var box = document.querySelector(".box-container");
for (var i = 1; i<=n*n; i++){
	var newBox = document.createElement("div");
	newBox.onclick = click;
	newBox.classList.add("innerBox");
	newBox.classList.add("temp");
	newBox.id = "Box"+ i;
	box.appendChild(newBox);

}