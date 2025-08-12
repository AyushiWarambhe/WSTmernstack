for (let number = 0; number <= 100; number++) {
    if (number % 5 === 0) {
        console.log(number);
    }
}

//to check even numbers between o and 100

let count = 0;
for (let num = 100; num != 0; num--) {
    if (num % 2 == 0) {
        count++;
        console.log(num);
    }
}
console.log("From 0 to 100 there are total " + count + " even numbers!");

//Factorial program

for (let i = 2; i <= 10; i += 2) {  
    let fact = 1;

    for (let j = 1; j <= i; j++) {
        fact *= j;
    }

    console.log(fact);
}

//years program

let start1 = 1500;
let org_start = start1;
let end1 = 2025;
let count1 = 0;

for (let year = start1; year <= end1; year++) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            count1++;
            console.log(year);
        }
    } else if (year % 4 === 0) {
        count1++;
        console.log(year);
    }
}
console.log("There are total " + count1 + " leap years in range of "
     + org_start + " to " + end1 + "!");