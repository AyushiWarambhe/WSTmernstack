
// Selecting elements
let button = document.getElementById("btn");
let inputBox = document.getElementById("textBox");
let output = document.getElementById("output");

// Event 1: Click event
button.addEventListener("click", sayHello);

// Event 2: Keyup event
inputBox.addEventListener("keyup", showText);

// Functions
function sayHello() {
  alert("Hello! You clicked the button.");
}

function showText() {
  output.innerText = "You typed: " + inputBox.value;
}
