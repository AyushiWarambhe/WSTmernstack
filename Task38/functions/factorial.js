const factorial = (number) => {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
};


let num = 5;
console.log(factorial(6));

console.log(`Factorial of ${num} is: ${factorial(num)}`);