// Store all tasks
let tasks = [];

let addNotesButton = document.querySelector("#add-notes-button");
let popup = document.querySelector(".add-notes-pop-up");
let closeButton = document.querySelector("#close-pop-up");
let taskForm = document.querySelector("#task-form");
let addNotesFormContainer = document.querySelector(".add-notes-form");


document.body.addEventListener("click", function(event) {
    let button = event.target.closest("button[data-action]");
    if (!button) return;

    let target = document.querySelector(button.dataset.target);

    if (button.dataset.action === "add") {
        target.classList.add("active");
    } else if (button.dataset.action === "remove") {
        target.classList.remove("active");
    } else if (button.dataset.action === "toggle") {
        target.classList.toggle("active");
    }
});

addNotesFormContainer.addEventListener("mouseleave", function() {
    let submitBtn = document.getElementById("formSubmitButton");
    if (submitBtn) submitBtn.click();
});

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let title = taskForm.title.value.trim();
    let description = taskForm.description.value.trim();

    if (title === "" || description === "") {
        console.log("Please fill in all fields!");
        return;
    }

    let task = {
        title: title,
        description: description,
        timeStamp: `T:  ${ new Date().toLocaleTimeString() }`
                    `D: ${ new Date().toLocaleDateString()}`
    };

    tasks.push(task);

    taskForm.title.value = "";
    taskForm.description.value = "";

    closeButton.click();

    displayTasks();
});

function displayTasks() {
    let container = document.querySelector(".tasks-container");
    container.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let taskDiv = document.createElement("div");
        taskDiv.className = "task border p-4";
        taskDiv.innerHTML = `
            <h4 class="title">${task.title}</h4>
            <p class="description">${task.description}</p>
            <span class="timeStamp">${task.timeStamp}</span>
        `;
        container.appendChild(taskDiv);
    }
}