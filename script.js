var AddItem = document.getElementById("buttonStart");
var visibleForm = document.getElementById("Form");
AddItem.addEventListener("click", function () {
  AddItem.style.display = "none";
  Form.classList.remove("hidden");
});

var taskInput = document.getElementById("taskInput");
var AddingTasksButton = document.getElementById("AddingTasksButton");
var tasklist = document.getElementById("tasklist");

window.addEventListener("load", function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => createTaskElement(task.text, task.checked));
});

visibleForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTaskElement(taskText, false);
    taskInput.value = "";
    saveTasksToLocalStorage();
  }
});

function createTaskElement(taskText, isChecked) {
  var li = document.createElement("li");

  li.innerHTML = `
    <label class="simple-checkbox">
    <span class="task-text">${taskText}</span>
    <input type="checkbox" class="task-check" ${isChecked ? "checked" : ""}/>
    <span class="checkMark"></span>
    <button class="delete-btn">Delete</button>
    </label>
  `;

  tasklist.appendChild(li);

  var checkbox = li.querySelector(".task-check");
  var taskSpan = li.querySelector(".task-text");

  if (isChecked) taskSpan.classList.add("checked");

  checkbox.addEventListener("change", function () {
    taskSpan.classList.toggle("checked");
    saveTasksToLocalStorage();
  });

  var deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    li.remove();
    saveTasksToLocalStorage();
  });
}

function saveTasksToLocalStorage() {
  const tasks = [];
  document.querySelectorAll("#tasklist li").forEach((li) => {
    const text = li.querySelector(".task-text").textContent;
    const checked = li.querySelector(".task-check").checked;
    tasks.push({ text, checked });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
