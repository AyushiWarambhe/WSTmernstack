
 let btn = document.getElementById("add-notes-button");
    let container = document.getElementById("container");

    btn.addEventListener("click", function () {
      let alertBox = document.createElement("div");
      alertBox.className = " alert fw-bold alert-success mt-3 ";
      alertBox.innerText = " Button clicked successfully!";

      btn.appendChild(alertBox); // add alert below button

      setTimeout(() => alertBox.remove(), 3000); // auto remove after 3 sec
    });