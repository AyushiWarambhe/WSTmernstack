let str = "helloworld";
let uniquechar = "";

for (let i = 0; i < str.length; i++) {
    if (uniquechar.indexOf(str[i]) === -1) { // check if first time
        console.log(str[i]); // print on new line
        uniquechar += str[i];      // mark as printed
    }
}
