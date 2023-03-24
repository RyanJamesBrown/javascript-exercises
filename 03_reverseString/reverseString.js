const reverseString = function(stringy) {
	var splitStringy = stringy.split("");
	var reverseStringyArray = splitStringy.reverse();
	var reverseStringy = reverseStringyArray.join("");
	return reverseStringy;
};

// Do not edit below this line
module.exports = reverseString;
