var sequence=[1,1,1,1,1,5,1,5,1,5,1,1];
var delaytim=[1,1,1,5,1,5,1,1,5,1,1,5];

function white() {
	document.body.style.background ="#FFFFFF";

}

function red() {

	document.body.style.background ="#FF0000";

}

var timeouts = [];




function play(){
	
	var count=delaytim[0];
	var factor=500;
	for (var j=0; j<timeouts.length; j++) {
  		clearTimeout(timeouts[j]);
	}
	for(var i=0;i<sequence.length;i++){
		
		timeouts.push(setTimeout(red,count*factor));
		count+=sequence[i];
		timeouts.push(setTimeout(white,count*factor));
		count+=delaytim[i];

	}


}


