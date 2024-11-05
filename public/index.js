// Select elements
const addButton = document.getElementById("add-button");
const titleInput = document.querySelector("input[type='text']");
const descriptionInput = document.getElementById("message");

// Function to get tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Function to save tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    const taskContainer = document.querySelector(".task-list");
    taskContainer.innerHTML = ""; // Clear current tasks
    
    const tasks = getTasks();
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const title = document.createElement("h3");
        title.innerText = task.title;
        taskDiv.appendChild(title);

        const description = document.createElement("p");
        description.innerText = task.description;
        taskDiv.appendChild(description);

        // Delete button as "X"
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X"; // Unicode for "X"
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = () => deleteTask(index);
        taskDiv.appendChild(deleteButton);

        taskContainer.appendChild(taskDiv);
    });
}


// Function to add a new task
function addTask() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title && description) {
        const tasks = getTasks();
        tasks.push({ title, description });
        saveTasks(tasks);
        titleInput.value = ""; // Clear input
        descriptionInput.value = ""; // Clear input
        displayTasks();
    } else {
        alert("Please enter both a title and description.");
    }
}

// Function to delete a task
function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    displayTasks();
}

// Add event listener for the add button
addButton.addEventListener("click", addTask);
// Initial display of tasks on page load
document.addEventListener("DOMContentLoaded", displayTasks);
