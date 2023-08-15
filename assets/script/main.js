
//inputs
let inputTask = document.querySelector("#inputTask");
let dateTime = document.querySelector("#dateTime");
let category = document.querySelector("#category");

// btn
let addTaskBtn = document.querySelector("#addTaskBtn");

let deleteBtn = document.createElement("button");
deleteBtn.value = "Delete";
deleteBtn.id = "deleteBtn";

// display
let taskList = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("entries"));


console.log(tasks);

let list = "";
if (tasks == null) {
    list = `<p id="warning"> No pending tasks. </p>` 
} else {
    tasks.forEach((x) => {
    list += `<ul id="${x.taskId}"> <li> ${x.taskInputTask} <button class="delete-button" id="deleteBtn">Delete</button></li> <li class="item-details">${x.taskDateTime} - ${x.taskCategory} </li></ul>`
})
}

taskList.innerHTML = list;

let addTask = () => {

    let n = JSON.parse(localStorage.getItem("idVal"));
    n = ++n;


    if (tasks == null) {
        tasks = [];
    }

    let task = {
        taskInputTask: inputTask.value,
        taskDateTime: dateTime.value,
        taskCategory: category.value,
        taskId: n
    }

    tasks.push(task);
    console.log(tasks);

    //converts objects to string
    localStorage.setItem("entries", JSON.stringify(tasks));
    localStorage.setItem("idVal", n);

    if (tasks.length == 1) {
        let warning = document.querySelector("#warning");
        warning.style.display = "none";
    }

    //display newly added task
    let taskObject = document.createElement("ul");

    taskObject.innerHTML = `<ul id="${task.id}"><li>${task.taskInputTask} <button class="delete-button" id="deleteBtn">Delete</button> </li> <li class="item-details">${task.taskDateTime} - ${task.taskCategory} </li></ul>`;

    taskList.appendChild(taskObject);
}

// events
addTaskBtn.addEventListener("click", addTask);

function deleteTask() {

    
    let ul= event.target.parentnode.parentnode;
    let rowId = ul.id;

    ul.remove();
    console.log(ul)


    //filter
    taskList = taskList.filter((obj) => obj.id != rowId);

    //update local storage
    localStorage.setItem("taskList", JSON.stringify(taskList));

    if (taskList.length == 0) {
        noDataRow();
    }
}

deleteBtn.addEventListener("click", deleteTask);

