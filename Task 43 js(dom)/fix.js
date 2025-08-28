let element= document.getElementById("id1")
function addBorder(){
    if (element.style.border==""){
        element.style.border="30px solid darkblue"
    }else{
        element.style.border=""
    }
}
let button = document.getElementById("btn1")
button.addEventListener("click", addBorder)