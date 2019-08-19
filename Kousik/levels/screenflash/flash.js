var sequence=[1,5,5,1,5,1,1];
var flashStep = 1;
function white() {
	document.bgColor="FFFFFF"

}

function red() {
	document.bgColor="FF0000"

}


var delay=1;
var count=delay;
var factor=300;
for(var i=0;i<sequence.length;i++){
	
	setTimeout(red,count*factor);
	count+=sequence[i];
	setTimeout(white,count*factor);
	count+=delay;
}





