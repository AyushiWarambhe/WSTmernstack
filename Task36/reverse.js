let str = prompt("Enter a string to reverse:");
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
console.log("Original String:", str);
console.log("Reversed String:", reversed);