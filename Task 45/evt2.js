

//let target = document.getElementById('target')

//let ir1 = document.getElementById("ir1")
//let ir2 = document.getElementById("ir2")
//let ir3 = document.getElementById("ir3")

//let red = 0
//let green = 0
//let blue = 0

//ir1.addEventListener("change", (event) => {
//    console.log("red : " + event.target.value)

//    red = event.target.value
//    updateColor()
//})

//ir2.addEventListener("change", (event) => {
//    console.log("green : " + event.target.value)
//    green = event.target.value
//    updateColor()
//})

//ir3.addEventListener("change", (event) => {
//    console.log("blue : " + event.target.value)
//    blue = event.target.value
//    updateColor()
//})

//function updateColor() {
//    target.style.background = `rgb(${red},${green},${blue})`
//}

//updateColor()

//UnOrdered List
function unorderedlist(){
let list= document.querySelector("#ul1")

let li1=document.createElement("li")
let li2=document.createElement("li")
let li3=document.createElement("li")
let li4=document.createElement("li")
let li5=document.createElement("li")
let li6=document.createElement("li")

li1.innerText="this is sentence no 1"
li2.innerText="sentence no 2"
li3.innerText="3 no sentence"
li4.innerText="senetnec no 4"
li5.innerText="sentence no 5"
li6.innerText="finally sentence no 6"

list.append(li1)
list.append(li2)
list.append(li3)
list.append(li4)
list.append(li5)
list.append(li6)

return list
}
unorderedlist()

// Ordered list

function Orderedlist(){
    let ol=document.querySelector("#ol1")

    let objects=["grapes","muskmelon","watermelon","mango","banana"]

    for(let i=0; i<objects.length;i++){
        let lii1=document.createElement("li")
        lii1.innerText=objects[i]
        ol.appendChild(lii1)


    }
    return ol
}

Orderedlist()
