function Check_Password(password) {

    let regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,15}$/;

    if (regex.test(password)) {
        return "Valid Password";
    } else {
        return "Invalid Password";
    }
}
console.log(Check_Password(window.prompt("enter password")) )


