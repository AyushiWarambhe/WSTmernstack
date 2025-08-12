let number = prompt("Enter a number:");
number = parseInt(number);
let original = number;
let reversed = 0;
do {
    let digit = number % 10;    
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);//float value removes
} while (number > 0);

if (original === reversed) {
    console.log("It is a palindrome Number!");
} else {
    console.log("Not a palindrome Number");
}