var sequence=[1,3,3,1,3,1,1];
var flashStep = 1;
function flash() {
	 if(flashStep==1) {
		 document.bgColor="FFFFFF";

		 flashStep=2; 
		 
	 }
	 else {
		 document.bgColor="FF0000";
		 flashStep=1;
		 clearInterval(id);

	 }
}

/*

for(var i=0;i<sequence.length;i++){
	console.log(flashStep);
	var id=setInterval(flash, sequence[i]*1000);
}
*/
function sayHi(){
	console.log("hi");
}
console.log("yo");
setTimeout(sayHi,5000);
console.log("yo2");
setTimeout(sayHi,10000);

