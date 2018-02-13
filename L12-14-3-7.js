/*
 * Lesson 12: Conditionals, 14. Quiz: What do I wear? (3-7)
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve =  8.47;

var sizeS = [18, 28, 8.13];
var sizeM = [20, 29, 8.38];
var sizeL = [22, 30, 8.63];
var sizeXL = [24, 31, 8.88];
var size2XL = [26, 33, 9.63];
var size3XL = [28, 34, 10.13];

// your code goes here
var shirtSize = null;

if 		  ((shirtWidth >= sizeS[0] && shirtWidth < sizeM[0]) && (shirtLength >= sizeS[1] && shirtLength < sizeM[1]) && (shirtSleeve >= sizeS[2] && shirtSleeve < sizeM[2])) {
    shirtSize = "S";
} else if ((shirtWidth >= sizeM[0] && shirtWidth < sizeL[0]) && (shirtLength >= sizeM[1] && shirtLength < sizeL[1]) && (shirtSleeve >= sizeM[2] && shirtSleeve < sizeL[2])) {
    shirtSize = "M";
} else if ((shirtWidth >= sizeL[0] && shirtWidth < sizeXL[0]) && (shirtLength >= sizeL[1] && shirtLength < sizeXL[1]) && (shirtSleeve >= sizeL[2] && shirtSleeve < sizeXL[2])) {
    shirtSize = "L";
} else if ((shirtWidth >= sizeXL[0] && shirtWidth < size2XL[0]) && (shirtLength >= sizeXL[1] && shirtLength < size2XL[1]) && (shirtSleeve >= sizeXL[2] && shirtSleeve < size2XL[2])) {
    shirtSize = "XL";
} else if ((shirtWidth >= size2XL[0] && shirtWidth < size3XL[0]) && (shirtLength >= size2XL[1] && shirtLength < size3XL[1]) && (shirtSleeve >= size2XL[2] && shirtSleeve < size3XL[2])) {
    shirtSize = "2XL";
} else if ((shirtWidth >= size3XL[0]) && (shirtLength >= size3XL[1]) && (shirtSleeve >= size3XL[2])) {
    shirtSize = "3XL";
} else {
    shirtSize = "N/A";
}
console.log(shirtSize);