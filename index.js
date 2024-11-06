// Select elements
const addButton = document.getElementById("add-button");
const titleInput = document.querySelector("input[type='text']");
const descriptionInput = document.getElementById("message");
const dateInput = document.getElementById("task-date");  // Add an input for date selection

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
        if (task.completed) taskDiv.classList.add("completed"); // If completed, add a class
        
        const title = document.createElement("h3");
        title.innerText = task.title;
        taskDiv.appendChild(title);

        const description = document.createElement("p");
        description.innerText = task.description;
        taskDiv.appendChild(description);
        
        const date = document.createElement("span");
        date.innerText = `Added on: ${task.timestamp}`;
        taskDiv.appendChild(date);
        
        // Mark as completed checkbox
        const completeButton = document.createElement("button");
        completeButton.innerText = task.completed ? "Undo" : "Complete";
        completeButton.onclick = () => toggleCompletion(index);
        taskDiv.appendChild(completeButton);

        // Delete button as "X"
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X"; // Unicode for "X"
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = () => deleteTask(index);
        taskDiv.appendChild(deleteButton);

        taskContainer.appendChild(taskDiv);
    });
}

// Function to add a new task with date/time
function addTask() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDate = dateInput.value.trim();

    if (title && description) {
        const tasks = getTasks();
        const timestamp = new Date().toLocaleString(); // Current date and time when task is added
        tasks.push({ title, description, timestamp, completed: false, dueDate });
        saveTasks(tasks);
        titleInput.value = ""; // Clear input
        descriptionInput.value = ""; // Clear input
        dateInput.value = ""; // Clear date input
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

// Function to toggle task completion
function toggleCompletion(index) {
    const tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    displayTasks();
}

// Add event listener for the add button
addButton.addEventListener("click", addTask);
// Initial display of tasks on page load
document.addEventListener("DOMContentLoaded", displayTasks);

