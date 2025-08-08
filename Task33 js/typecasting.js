//String to number

let str = "123";
let num = Number(str);
console.log(typeof str); 
console.log(typeof num); 
console.log(num);       

//Number to String

let num1 = 456;
let str1 = String(num1);
console.log(typeof num1); 
console.log(typeof str1); 
console.log(str);       

//Number to Boolean

let num2 = 0;
let bool = Boolean(num2);
console.log(typeof bool); 
console.log(bool);        

let num3= 1;
let bool1 = Boolean(num3);
console.log(typeof bool1); 
console.log(bool1);     

//String to Boolean

let str3 = "hello";
let bool2 = Boolean(str3);
console.log(typeof str3);  
console.log(typeof bool2);
console.log(bool2);        // If String is notempty returns True

//Prompt Example
let n1 = Number(window.prompt("enter number 1"));
let n2 = Number(window.prompt("enter number 2"));
n1 = Number(n1);
n2 = Number(n2);
console.log(n1 + n2);