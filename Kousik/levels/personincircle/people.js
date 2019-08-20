function reply_click()
{	
	console.log(this.id)
	if(this.getAttribute('src')=="man.png"){
		
		var x=document.getElementsByClassName("person");
		
		for (var i = 0; i < x.length; i++) {
 			 x[i].src="man.png";
		}
		this.src="orangeman.png";
		document.getElementById('chosen-person').innerHTML="<h2>Chosen person : "+this.id+"</h2>";
	}
	else {
		this.src="man.png"
	}
    
}


var circle=document.getElementById("circle-container");
var n=70;//CODE BREAKS IF n IS HIGHER THAN 80
var rotatedegrees=0;
var translatedegrees=25;
for(var iterator=1;iterator<=n;iterator++){


	var newelement=document.createElement('a');


	circle.appendChild(newelement);



	var imgelement=document.createElement('img')
	imgelement.classList.add("person");
	imgelement.id="person"+iterator;
	imgelement.src="man.png";
	imgelement.onclick=reply_click;
	newelement.appendChild(imgelement);


	newelement.style.transform = "rotate("+rotatedegrees+"deg) translate("+translatedegrees+"em) ";
	//newelement.style.transform = "rotate("+rotatedegrees+"deg) translate("+translatedegrees+"em) "+"rotate("+(360-rotatedegrees)+"deg)";
	rotatedegrees+=Math.round(360/n);
}
