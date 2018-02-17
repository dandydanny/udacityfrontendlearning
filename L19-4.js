/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList, firstItem, link;

navList = $('.nav-list');

// Select first child of navList
firstItem = navList.children().first();

// For that first child, find <a> tag
link = firstItem.find('a');

// For that <a> tag, add attribute href, and set value to #1
link.attr('href', '#1');