

let target = document.getElementById('target')

let ir1 = document.getElementById("ir1")
let ir2 = document.getElementById("ir2")
let ir3 = document.getElementById("ir3")

let red = 0
let green = 0
let blue = 0

ir1.addEventListener("change", (event) => {
    console.log("red : " + event.target.value)

    red = event.target.value
    updateColor()
})

ir2.addEventListener("change", (event) => {
    console.log("green : " + event.target.value)
    green = event.target.value
    updateColor()
})

ir3.addEventListener("change", (event) => {
    console.log("blue : " + event.target.value)
    blue = event.target.value
    updateColor()
})

function updateColor() {
    target.style.background = `rgb(${red},${green},${blue})`
}

updateColor()