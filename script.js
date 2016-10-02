var newTask = document.querySelector("#new-task");
var newTaskBody = document.querySelector("#new-task-body");
var tasks = document.querySelector("#tasks");

newTask.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();

var task = document.createElement("div");

task.classList.add("task");

task.textContent = newTaskBody.value;

tasks.appendChild(task);

newTask.reset();
}

/*
<div id="tasks">
<!--
<div class="task">
<li>
  <label>
    <input type="checkbox">
    <span>Buy some milk</span>
  </label>
</li>
</div>
-->
</div>*/

//
// <li>
//   <label>
//     <input type="checkbox">
//     <span>Buy some milk</span>
//   </label>
// </li>
