/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(elem){
    elem *= 1.15;
    // elem = Math.round(elem * 100) / 100; //round to 2 decimal places - using $9.90, this returns 11.39
    elem = Number(elem.toFixed(2)); //chop to 2 decimal places, then casting string back to number; this returns 11.38
    return elem
});

console.log(totals);

//Feb 14, 2018 - Lesson 15-22 quiz 6-9 test spec prefers $11.38 for $9.90 plus 15% tip. Realistically, merchants would most likely round up 11.385 to 11.39
//Lesson description says toFixed(2) rounds to two places. This is incorrect. toFixed(2) simply chops off digits beyond two decimal places
//Feb 23, 2018 - toFixed() actually rounds, but not in the convention that people in USA expects. 5 is rounded down while 6 is rounded up.
