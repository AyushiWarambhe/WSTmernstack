const findBig = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};
let n1 = 1
let n2 = 4
let n3 = 2
console.log("The biggest number is: " + findBig(n1, n2, n3));
console.log(`The biggest number is: ${findBig(n1, n2, n3)}`);