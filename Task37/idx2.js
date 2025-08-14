let str = "helloworld";
let done = "";

for (let i = 0; i < str.length; i++) {
    if (done.indexOf(str[i]) === -1) { // first time seeing it
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) count++;
        }
        console.log(str[i], "=", count);
        done += str[i];
    }
}
