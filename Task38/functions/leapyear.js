function Check_LeapYear(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}
let year1 = 2024;
console.log(year1 + " is leap year? " + Check_LeapYear(year1));
console.log(`${year1} is leap year? ${Check_LeapYear(year1)}`);

let year2 = 2013;
console.log(year2 + " is leap year? " + Check_LeapYear(year2));
console.log(`${year2} is leap year? ${Check_LeapYear(year2)}`);