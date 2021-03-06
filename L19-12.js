/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
var paragraph, text, length;
paragraph = $('p');

paragraph.each(function(){
	text = $(this).text();
	length = text.length;
	$(this).append(" " + length);
})

/* Udacity's elegant solution

function numberAdder() {
	var text, number;
	text = $(this).text();
	number = text.length;
	$(this).text(text + " " + number);
}

$('p').each(numberAdder);

*/


/* @alexandertran's elegant solution
$('p').each(function(){ //iterate through p's
    var pLength = $(this).text().length; //calculate length
    $(this).append(pLength); // add length to each p
});
*/
