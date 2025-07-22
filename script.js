var AddItem = document.getElementById("buttonStart");
var visibleForm = document.getElementById("Form");
AddItem.addEventListener("click", function () {
  AddItem.style.display = "none";
  Form.classList.remove("hidden");
});

var taskInput = document.getElementById("taskInput");
var AddingTasksButton = document.getElementById("AddingTasksButton");
var tasklist = document.getElementById("tasklist");
AddingTasksButton.addEventListener("click", function () {
    
});

visibleForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var li = document.createElement("li");

    li.innerHTML = `
      <label class="simple-checkbox">
      <span class="task-text">${taskText}</span>
      <input type="checkbox"  class="task-check"/>
      <span class="checkMark"></span>
      <button class="delete-btn">Delete</button>
      </label>
    `;

    tasklist.appendChild(li);

    taskInput.value = "";

    var checkbox = li.querySelector(".task-check");
    var taskSpan = li.querySelector(".task-text");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        taskSpan.classList.add("checked");
      } else {
        taskSpan.classList.remove("checked");
      }
    });

    var deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
  }
});
