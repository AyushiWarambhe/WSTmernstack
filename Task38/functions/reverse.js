function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
let str1 = "namaste ";
console.log("Original: " + str1);
console.log("Reversed: " + reverseStr(str1));

let str2 = "india";
console.log("Original: " + str2);
console.log("Reversed: " + reverseStr(str2));