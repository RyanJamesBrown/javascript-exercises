const repeatString = function(stringy, numy) {
	let bigStringy = "";
	if(numy < 0){return 'ERROR'};
	for(i=0;i<numy;i++){
		bigStringy = bigStringy+stringy;
	}
	return bigStringy;
};

// Do not edit below this line
module.exports = repeatString;
