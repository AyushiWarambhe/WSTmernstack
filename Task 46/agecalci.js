function calculateAge(userDob) {
    let dob = new Date(userDob);
    let currentDate = new Date();

    let difference = currentDate.getTime() - dob.getTime();
    let seconds = difference / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let years = days / 365;

    let y = Math.floor(years);
    let d = Math.floor(days % 365);
    let m = Math.floor(minutes % (24 * 60));

    return `${y} years : ${d} days : ${m} minutes`;
}

console.log(calculateAge("2005-01-05"));