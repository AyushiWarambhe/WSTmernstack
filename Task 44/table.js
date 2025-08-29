let tableData = [
    {
        name: "person 1",
        phone: "123456"
    },
    {
        name: "person 2",
        phone: "123456"
    },
    {
        name: "person 3",
        phone: "123456"
    },
    {
        name: "person 4",
        phone: "123456"
    }
]

const btn = document.getElementById("btn1");
const table = document.getElementById("table1");

let currentIndex = 0;

btn.addEventListener("click", () => {
   if (currentIndex < tableData.length) {
       table.innerHTML += `
           <tr>
               <td>${tableData[currentIndex].name}</td>
               <td>${tableData[currentIndex].phone}</td>
           </tr>
       `;
       currentIndex++;
       if (currentIndex === tableData.length) {
           alert("Data completed!");
           btn.disabled = true;
           btn.innerHTML = "<b>Completed</b>";
       }
   }
});