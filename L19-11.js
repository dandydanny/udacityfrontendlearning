/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
$( "<div id='family2'></div>" ).insertAfter( '#family1' ); // insert node as sibiling
$('#family2').append('<h1>Family2</h1>');			// insert node as child to parent
$('#family2').append('<div id="bruce"></div>');
$('#bruce').append('<h2>Bruce</div>');

$('#bruce').append('<div id="madison"><h3>Madison</h3></div>');
$('#bruce').append('<div id="hunter"><h3>Hunter</h3></div>');

/* Solution from Udacity

var family1, family2, bruce, madison, hunter;
family1 = $('#family1');
family2 = $('<div id="#"family2"><h1>Family 2</h1></div>');
bruce = $('<div id="#bruce"><h2>Bruce</h2></div>');
madison = $('<div id="#madison"><h3>Madison</h3></div>');
hunter = $('<div id="#hunter"><h3>Hunter</h3></div>');

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);

*/