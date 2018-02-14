/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
	var responseString = "";
	for (var i = 1; i <= num; i++) {
		responseString += "ha";
	}
	responseString += "!";
	return responseString;
}

console.log(laugh(10));
