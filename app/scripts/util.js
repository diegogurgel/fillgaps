var U = {
	majorLengthString:function (arrayString){
		var major="";
		for (var i = 0,len = arrayString.length;i<len; i++) {
			if(arrayString[i].length>major.length){
				major = arrayString[i];
			}
		}
		return major.length;
	}
}
