/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
	name: "Daniel",
	friends: 100,
	messages: ["Hello world!", "Hi Zucks!", "Why are the ads following me everywhere?"],
	postMessage: function postMsg(msg) {
		facebookProfile.messages.push(msg);
	},
	deleteMessage: function delMsg(index) {
		facebookProfile.messages.splice(index,1);
	},
	addFriend: function addFriend() {
		++facebookProfile.friends;
	},
	removeFriend: function removeFriend() {
		--facebookProfile.friends;
	}
}