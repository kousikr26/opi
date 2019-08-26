var lock = new PatternLock("#lock", {
  onPattern: function(pattern) {
    // Context is the pattern lock instance
    console.log(pattern);
  	var l=[];
	for(var p=0;p<20;p++)
		l[p]=0;
	var p=pattern.toString();
	if(p.includes("12")||(p.includes("21")))
		l[0]=1;
	if(p.includes("23")||(p.includes("32")))
		l[1]=1;
	if(p.includes("45")||(p.includes("54")))
		l[2]=1;
	if(p.includes("56")||(p.includes("65")))
		l[3]=1;
	if(p.includes("78")||(p.includes("87")))
		l[4]=1;
	if(p.includes("89")||(p.includes("98")))
		l[5]=1;
	if(p.includes("14")||(p.includes("41")))
		l[6]=1;
	if(p.includes("47")||(p.includes("74")))
		l[7]=1;
	if(p.includes("25")||(p.includes("52")))
		l[8]=1;
	if(p.includes("58")||(p.includes("85")))
		l[9]=1;
	if(p.includes("36")||(p.includes("63")))
		l[10]=1;
	if(p.includes("69")||(p.includes("96")))
		l[11]=1;
	if(p.includes("15")||(p.includes("51")))
		l[12]=1;
	if(p.includes("24")||(p.includes("42")))
		l[13]=1;
	if(p.includes("26")||(p.includes("62")))
		l[14]=1;
	if(p.includes("35")||(p.includes("53")))
		l[15]=1;
	if(p.includes("48")||(p.includes("84")))
		l[16]=1;
	if(p.includes("57")||(p.includes("75")))
		l[17]=1;
	if(p.includes("59")||(p.includes("95")))
		l[18]=1;
	if(p.includes("68")||(p.includes("86")))
		l[19]=1;

	if(p.includes("13")||(p.includes("31"))){
		l[0]=1;
		l[1]=1
	}
	if(p.includes("46")||(p.includes("64"))){
		l[2]=1;
		l[3]=1
	}
	if(p.includes("79")||(p.includes("97"))){
		l[4]=1;
		l[5]=1
	}
	if(p.includes("17")||(p.includes("71"))){
		l[6]=1;
		l[7]=1
	}
	if(p.includes("28")||(p.includes("82"))){
		l[8]=1;
		l[9]=1
	}
	if(p.includes("39")||(p.includes("93"))){
		l[10]=1;
		l[11]=1
	}
	if(p.includes("19")||(p.includes("91"))){
		l[12]=1;
		l[18]=1
	}
	if(p.includes("37")||(p.includes("73"))){
		l[15]=1;
		l[17]=1
	}
	//console.log(l);
	var los=0; //lines of symmetry
//check vertical line of symmetry 258
	if(l[0]==l[1] && l[2]==l[3] && l[4]==l[5]&& l[6]==l[10]&& l[7]==l[11]&& l[12]==l[15]&& l[13]==l[14]&& l[16]==l[19]&& l[17]==l[18])
		los++;
	//check horizontal symmetry 456:
	if(l[6]==l[7] && l[8]==l[9] && l[10]==l[11] && l[0]==l[4] && l[1]==l[5] && l[12]==l[17] && l[13]==l[16] && l[14]==l[19] && l[15]==l[18])
		los++;
	//diagonal 159
	if(l[6]==l[0]&&l[7]==l[1]&&l[4]==l[10]&&l[5]==l[11]&&l[2]==l[8]&&l[9]==l[3]&&l[16]==l[14]&&l[17]==l[15])
		los++;
	//diagonal 357
	if(l[1]==l[10]&&l[0]==l[11]&&l[6]==l[5]&&l[7]==l[4]&&l[8]==l[3]&&l[2]==l[9]&&l[13]==l[19]&&l[12]==l[18])
		los++;
	//console.log("los = "+los);
	
	//console.log(p.length)	;			
   if(p.length>8 && los>0)
   	alert("YOU WIN!!!!!!!!!!!!");
   else
   	alert("you lose. try again");
   }
});
