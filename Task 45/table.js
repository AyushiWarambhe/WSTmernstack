let list = document.createElement("ul")

let listItem1 = document.createElement("li")

let listItem2 = document.createElement("li")

let listItem3 = document.createElement("li")


listItem1.innerHTML = "<b>this is some text</b>"
listItem2.innerText = "item 2"
listItem3.innerText = "item 3"

listItem1.style.color = "red"

list.appendChild(listItem1)
list.appendChild(listItem2)
list.appendChild(listItem3)

document.getElementById("target").appendChild(list)

document.getElementById("target").appendChild(list)

document.getElementById("target").appendChild(list)

let elementToRemove = document.getElementById("heading1")

document.getElementById("target").removeChild(elementToRemove)