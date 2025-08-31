//let list = document.createElement("ul")

//let listItem1 = document.createElement("li")

//let listItem2 = document.createElement("li")

//let listItem3 = document.createElement("li")


//listItem1.innerHTML = "<b>this is some text</b>"
//listItem2.innerText = "item 2"
//listItem3.innerText = "item 3"

//listItem1.style.color = "red"

//list.appendChild(listItem1)
//list.appendChild(listItem2)
//list.appendChild(listItem3)

//document.getElementById("target").appendChild(list)

//document.getElementById("target").appendChild(list)

//document.getElementById("target").appendChild(list)

//let elementToRemove = document.getElementById("heading1")

//document.getElementById("target").removeChild(elementToRemove))

// table

let tableData = [
    {
        name: "shivani",
        phone: "11111111"
    },
    {
        name: "person 2",
        phone: "121416"
    },
    {
        name: "person 3",
        phone: "223355"
    },
    {
        name: "person 4",
        phone: "112233"
    }
]
let table = document.querySelector("#table1")

let tr = document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")

let tr1 = document.createElement("tr")
let td3 = document.createElement("td")
let td4 = document.createElement("td")

let tr2 = document.createElement("tr")
let td5 = document.createElement("td")
let td6 = document.createElement("td")

let tr3 = document.createElement("tr")
let td7 = document.createElement("td")
let td8 = document.createElement("td")

td1.innerText = tableData[0].name
td2.innerText = tableData[0].phone
td3.innerText = tableData[1].name
td4.innerText = tableData[1].phone
td5.innerText = tableData[2].name
td6.innerText = tableData[2].phone
td7.innerText = tableData[3].name
td8.innerText = tableData[3].phone



tr.appendChild(td1)
tr.appendChild(td2)
tr1.appendChild(td3)
tr1.appendChild(td4)
tr2.appendChild(td5)
tr2.appendChild(td6)
tr3.appendChild(td7)
tr3.appendChild(td8)

table.append(tr)
table.append(tr1)
table.append(tr2)
table.append(tr3)


// using for loop
let tableData1 = [
    { Productname: "Muskmelon", fruitno: "11111111" },
    { Productname: "mango", fruitno: "121416" },
    { Productname: "watermelon", fruitno: "223355" },
    { Productname: "grapes", fruitno: "112233" }
]

let table1 = document.querySelector("#table2")

// Using for loop
for (let i = 0; i < tableData.length; i++) {
    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    td1.innerText = tableData1[i].Productname

    let td2 = document.createElement("td")
    td2.innerText = tableData1[i].fruitno

    tr.append(td1, td2)   // Add both cells to row
    table1.append(tr)      // Add row to table
}

// Last row with <th>
let trLast = document.createElement("tr")
let th = document.createElement("th")
th.innerText = "this is the last box"
trLast.appendChild(th)
table1.append(trLast)
