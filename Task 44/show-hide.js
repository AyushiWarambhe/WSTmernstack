let e2 = document.getElementById("e3");
const btn = document.getElementById("btn2");

let originalClasses = "size color";

function ShowHide() {
    let classes = e2.classList.value;
    let isHidden = classes.includes("hide");

    if (isHidden) {
        e2.className = `${originalClasses} show`;
    } else {
        e2.className = `${originalClasses} hide`;
    }
}
btn.addEventListener("click", ShowHide);