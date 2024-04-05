// script.js
document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector("button");
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    addButton.addEventListener("click", function() {
        const taskText = inputBox.value.trim();
        if (taskText !== "") {
            let li = document.createElement("li");
            li.textContent = taskText;
            listContainer.appendChild(li);
            inputBox.value = ""; // Clear input box after adding task
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        else{
            alert("You must write something")
        }
    });
    listContainer.addEventListener("click", function (e) {
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName=== "SPAN"){
            e.target.parentElement.remove();
        }
    }, false);
})

