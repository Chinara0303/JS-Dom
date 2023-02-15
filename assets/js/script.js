"use strict";

let buttonOn = document.querySelector("#intro .content .on");
let buttonOff = document.querySelector("#intro .content .off");
let icon = document.querySelector("#intro .content .icon");
let h1 = document.querySelector("#intro .content h1")
// buttonOn.addEventListener("click",function() {
//     icon.style.color = "yellow";
//     document.body.style.backgroundColor = "white"
// })
// buttonOff.addEventListener("click",function() {
//     icon.style.color = "rgb(92, 91, 91)";
//     document.body.style.backgroundColor = "black"
// })

// icon.addEventListener("click",function(){
//     if(!icon.classList.contains("active-icon") && (!document.body.classList.contains("active-body"))){
//         icon.classList.add("active-icon");
//         document.body.classList.add("active-body")
//     }
//     else{
//         icon.classList.remove("active-icon")
//         document.body.classList.remove("active-body")
//     }
// })

icon.addEventListener("mouseover", function () {
    if (!icon.classList.contains("active-icon") && (!document.body.classList.contains("active-body"))) {
        icon.classList.add("active-icon");
        document.body.classList.add("active-body");
        h1.style.color="white"
    }
    else{
        icon.classList.remove("active-icon");
        document.body.classList.remove("active-body");
        h1.style.color="black"
    }
})

let input = document.querySelector("#intro .content .inp-btn input");
let addBtn = document.querySelector("#intro .content .inp-btn .add");
let p = document.querySelector("#intro p");
let ul = document.querySelector("#intro .content ul");
let errorMsg = document.querySelector("#intro .content .errorMsg");
let emptyMsg = document.querySelector("#intro .content .emptyMsg");

// input.addEventListener("keyup",function(){
//     p.classList.add("text-center");
//     p.innerText = this.value;
// })

function checkInpByDNone(message) {
    if (message.classList.contains("d-none")) {
        message.classList.remove("d-none")
        message.classList.add("d-block")
    }
}
function checkInpByDBlock(message) {
    if (!message.classList.contains("d-none")) {
        message.classList.remove("d-block")
        message.classList.add("d-none")
    }
}
addBtn.addEventListener("click", function () {
    if (input.value == " ") {
        checkInpByDNone(emptyMsg);
        return;
    }
    checkInpByDBlock(emptyMsg);

    let inpvalue = input.value.trim();
    let inputValue = inpvalue.split("")[0].toUpperCase() + inpvalue.slice(1).toLowerCase();

    let items = document.querySelectorAll("li");
    for (const item of items) {
        if (item.innerText == inputValue) {
            checkInpByDNone(errorMsg);
            input.value = "";
            return;
        }
        else {
            checkInpByDBlock(errorMsg)
        }
    }

    let li = document.createElement("li");
    li.classList.add("list-group-item", "mt-2");
    li.style.cursor = "pointer"
    li.innerText = inputValue;
    ul.append(li);
    input.value = "";
    let itemsLi = document.querySelectorAll("#intro .content ul li");
    for (const item of itemsLi) {
        item.addEventListener("click", function () {
            this.remove();
        })
    }
})