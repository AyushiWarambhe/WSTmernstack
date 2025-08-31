// Selecting elements
//let button = document.getElementById("btn");
//let inputBox = document.getElementById("textBox");
//let output = document.getElementById("output");

// Event 1: Click event
//button.addEventListener("click", sayHello);

// Event 2: Keyup event
//inputBox.addEventListener("keyup", showText);

// Functions
//function sayHello() {
//  alert("Hello! You clicked the button.");
//}

//function showText() {
//  output.innerText = "You typed: " + inputBox.value;
//}

document.addEventListener('keydown', (event) => {
  document.getElementById('keydown').innerText =` The key has been pressed (keydown): 
  ${event.key}`;
});

document.addEventListener('keypress', (event) => {
  document.getElementById('keypress').innerText = `The key has been pressed (keypress):
   ${event.key}`;
});

document.addEventListener('keyup', (event) => {
  document.getElementById('keyup').innerText = `The key has been released (keyup): 
  ${event.key}`;
});


let eventBox = document.getElementById("event-box");
let eventLog = document.getElementById("event-log");

function logEvent(message) {
   eventLog.innerText = "Log: " + message;
}

eventBox.addEventListener("click", () => logEvent("Box clicked"));
eventBox.addEventListener("dblclick", () => logEvent("Box double clicked"));
eventBox.addEventListener("mouseenter", () => {
  logEvent("Mouse entered box");
  eventBox.style.background = "white";
});

eventBox.addEventListener("mouseleave", () => {
  logEvent("Mouse left box");
  eventBox.style.background = "orange";
});

window.addEventListener("resize", () => console.log("Window resized"));
window.addEventListener("scroll", () => console.log("Window scrolled, Y =", window.scrollY));