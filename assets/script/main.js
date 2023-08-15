
//inputs
let inputTask = document.querySelector("#inputTask");
let dateTime = document.querySelector("#dateTime");
let category = document.querySelector("#category");

// btn
let addTaskBtn = document.querySelector("#addTaskBtn");

let deleteBtn = document.createElement("button");

// display
let taskList = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("entries"));

console.log(tasks);

let list = "";
if (tasks == null) {
    list = `<p id="warning"> No pending tasks. </p>` 
} else {
    tasks.forEach((x) => {
    list += `<ul><li> ${x.taskInputTask}</li> <li class="item-details">${x.taskDateTime} - ${x.taskCategory} </li></ul>`
})
}

taskList.innerHTML = list;

let addTask = () => {

    if (tasks == null) {
        tasks = [];
    }

    let task = {
        taskInputTask: inputTask.value,
        taskDateTime: dateTime.value,
        taskCategory: category.value
    }

    tasks.push(task);
    console.log(tasks);

    //converts objects to string
    localStorage.setItem("entries", JSON.stringify(tasks));

    if (tasks.length == 1) {
        let warning = document.querySelector("#warning");
        warning.style.display = "none";
    }

    //display newly added task
    let taskObject = document.createElement("ul");

    taskObject.innerHTML = `<ul><li>${task.taskInputTask}</li> <li class="item-details">${task.taskDateTime} - ${task.taskCategory} </li></ul>`;

    taskList.appendChild(taskObject);
}

// events
addTaskBtn.addEventListener("click", addTask);

let deleteTask = () => {
    taskList.removeChild(taskObject1)
}

deleteBtn.addEventListener("click", deleteTask);

