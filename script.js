//submit new task//
var newTask = document.querySelector("#new-task");
var newTaskBody = document.querySelector("#new-task-body");
var tasks = document.querySelector("#tasks");

newTask.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();

var task = document.createElement("div");
var li = document.createElement("li");
var label = document.createElement("label");
var input = document.createElement("input");
input.type = "checkbox";
input.class = "checkbox"
var span = document.createElement("span");

task.classList.add("task");
li.classList.add("li");
label.classList.add("label");
input.classList.add("input");
span.classList.add("span");


span.textContent = newTaskBody.value;

tasks.appendChild(task);
task.appendChild(li);
li.appendChild(label);
label.appendChild(input);
label.appendChild(span);
newTask.reset();

var placeHolderInList = document.querySelector("h2");
placeHolderInList.style.display = "none";
}


var taskCount = document.querySelector("#count");
var count = parseInt(taskCount.textContent);

newTask.addEventListener("submit", incrementCount);

function incrementCount(event) {
  event.preventDefault();
  count = parseInt(taskCount.textContent);
  taskCount.textContent = count + 1;

}


//
// <p> <span id="count"> 0 </span> todos </p>



//get rid of "nothing to do"//



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
