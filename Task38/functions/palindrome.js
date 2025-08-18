function Ckeck_Palindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str == reversed;
}
let word = "level";
console.log(word + " is palindrome ? " + Ckeck_Palindrome(word));

let word2 = "level1";
console.log(word2 + " is palindrome ? " + Ckeck_Palindrome(word2));

let word3 = "level8";
console.log(`${word3} is palindrome ` + Ckeck_Palindrome(word3));