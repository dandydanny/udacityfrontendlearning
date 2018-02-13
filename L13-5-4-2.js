/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
	99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
	98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
	...
	2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
	1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
*/

var num = 99;

while (num > 0) {
    // check value of num
    var currentBottlePlural = (num === 1) ? "" : "s";
    numMinusOne = num - 1;
    var nextBottlePlural = (numMinusOne === 1) ? "" : "s";
    // Sanity check for plural string logic
    // console.log("Current | next: " + currentBottlePlural + ", " + nextBottlePlural);

    // print lyrics using num
    // don't forget to check pluralization on the last line!

    console.log(num + " bottle" + currentBottlePlural + " of juice on the wall! " + num + " bottle" + currentBottlePlural + " of juice! Take one down, pass it around... " + numMinusOne + " bottle" + nextBottlePlural + " of juice on the wall!");
    // decrement num
    num = numMinusOne;
}
