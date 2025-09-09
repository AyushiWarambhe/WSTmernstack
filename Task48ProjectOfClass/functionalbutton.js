let tasks = []

let add_notes_button = document.querySelector("#add-notes-button")

let targetElement = document.querySelector(".add-notes-pop-up")

let closeButton = document.querySelector('#close-pop-up')

let taskForm = document.querySelector("#task-form")

let addNotesFormContainer = document.querySelector(".add-notes-form")

document.body.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const target = document.querySelector(button.dataset.target);

    const actions = {
      add: () => target.classList.add("active"),
      remove: () => target.classList.remove("active"),
      toggle: () => target.classList.toggle("active")
    };

    const fn = actions[button.dataset.action];
    if (fn) fn();
  }); 

addNotesFormContainer.addEventListener("mouseleave", () => {
    document.getElementById("formSubmitButton").click()
})

let taskObject = {
    title: "",
    description: "",
    timeStamp: ""
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    try {

        if (!event.target["title"].value || !event.target["description"].value) {
            throw ("empty fields !")
        }

        taskObject.title = event.target["title"].value
        taskObject.description = event.target["description"].value
        taskObject.timeStamp = `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
        console.log(taskObject)
        tasks.push(taskObject)
        event.target["title"].value = ""
        event.target["description"].value = ""
        closeButton.click()
        displayTask()
    } catch (err) {
        console.log("please added task data before submitting ! : ", err)
    }
})

function displayTask() {

    document.querySelector('.tasks-container').innerHTML = ""

    tasks.forEach((task) => {
        let singleTask = document.createElement("div")
        singleTask.classList.value = "task border p-4"
        singleTask.innerHTML = `
                            <h4 class="title">${task.title}</h4>
                            <p class="description">
                                ${task.description}
                            </p>
                            <span class="timeStamp">${task.timeStamp}</span>
    `
        document.querySelector('.tasks-container').appendChild(singleTask)
    })
}