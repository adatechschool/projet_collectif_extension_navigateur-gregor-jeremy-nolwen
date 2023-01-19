let ul = document.getElementById("tasksList");
let tasks = [];

document.getElementById("submitToDo").addEventListener("click", addToDo);

document.addEventListener("keypress", function (e) {
  const code = e.keyCode ? e.keyCode : e.which;
  if (e.key === "Enter" || code == 13) {
    addToDo();
    e.preventDefault();
  }
});

function addToDo() {
  let todo = document.getElementById("todo").value;
  if (todo === "") alert("You must write something !");
  else {
    tasks.push(todo);
    let li = document.createElement("li");
    li.innerHTML = todo;
    li.setAttribute("data-task", todo);
    li.addEventListener("click", checked);
    let span = document.createElement("span");
    span.innerHTML = "x";
    span.addEventListener("click", deleteToDo);
    li.appendChild(span);
    ul.appendChild(li);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("todo").value = "";
  }
}

function checked() {
  let classLi = this.getAttribute("class");
  if (classLi === "checked") this.setAttribute("class", "unchecked");
  else {
    this.setAttribute("class", "checked");
  }
}

function deleteToDo() {
  let taskToRemove = this.parentElement.getAttribute("data-task");
  let index = tasks.indexOf(taskToRemove);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  ul.removeChild(this.parentElement);
}

window.onload = function () {
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    for (let i = 0; i < tasks.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = tasks[i];
      li.setAttribute("data-task", tasks[i]);
      li.addEventListener("click", checked);
      let span = document.createElement("span");
      span.innerHTML = "x";
      span.addEventListener("click", deleteToDo);
      li.appendChild(span);
      ul.appendChild(li);
    }
  }
};

function copyTasks() {
  var range = document.createRange();
  range.selectNode(ul);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  alert("Tasks copied to clipboard!");
}
copyBtn.addEventListener("click", copyTasks);
