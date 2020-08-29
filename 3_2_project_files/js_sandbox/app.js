const newTaskText = document.getElementById("task");
const addTaskButton = document.getElementById("add_task_btn");
const form = document.getElementById("task-form");
const clearTasksButton = document.getElementById("clear_tasks_btn");
const taskList = document.getElementById("collection");
const filterTask = document.getElementById("filter_tasks");
loadEventListners();

function loadEventListners() {
  // Dom load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add task event;
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear tasks event
  clearTasksButton.addEventListener("click", clearTasks);
  // filter task event
  filterTask.addEventListener("keyup", filterTasks);
}

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  // Displaying each task to the UI
  console.log(tasks);
  tasks.forEach((task) => {
    // Create li element
    const li = document.createElement("li");
    li.className = "collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = `<i class='fa fa-remove'></i>`;
    li.appendChild(link);
    taskList.appendChild(li);
  });
  console.log("I am here");
}

function addTask(event) {
  event.preventDefault();
  if (newTaskText.value === "") {
    alert("add the task");
  }
  // Create li element
  const li = document.createElement("li");
  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(newTaskText.value));
  // Create new link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = `<i class='fa fa-remove'></i>`;
  li.appendChild(link);
  taskList.appendChild(li);
  // add the task to the local storage
  storeTaskInLocalStorage(newTaskText.value);
  newTaskText.value = "";
}
function storeTaskInLocalStorage(taskText) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(taskText);
  console.log("here");
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function removeTask(event) {
  if (event.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure ?")) {
      event.target.parentElement.parentElement.remove();
      // Remove task from the local storage
      removeTaskFromLocalStorage(event.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  console.log(taskItem);
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
    if (localStorage.getItem("tasks") !== null) {
      localStorage.removeItem("tasks");
    }
  }
}

function filterTasks(event) {
  const text = event.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
