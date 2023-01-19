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
    // injection html et clear input
    let li = document.createElement("li");
    let para = document.createElement("p")
    para.innerHTML = todo;
    li.setAttribute("data-task", todo);
    para.setAttribute("class", "unchecked")
    para.addEventListener("click", checked);
    let span = document.createElement("span");
    span.innerHTML = "x";
    span.addEventListener("click", deleteToDo);
    li.appendChild(para);
    li.appendChild(span);
    ul.appendChild(li);
    document.getElementById("todo").value = "";
    // stockage 
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function checked() {
  console.log('function checked')
  let classPara = this.getAttribute("class");
  let tasksToCheck = this.parentElement.getAttribute("data-task");
  if (classPara === "checked") {
    this.setAttribute("class", "unchecked");
    tasks.push(tasksToCheck)
    console.log("task" ,tasksToCheck)
  }else {
    this.setAttribute("class", "checked");
    let index = tasks.indexOf(tasksToCheck);
    tasks.splice(index, 1);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteToDo() {
  console.log("function delete")
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
      let para = document.createElement("p")
      para.innerHTML = tasks[i];
      li.setAttribute("data-task", tasks[i]);
      para.setAttribute("class", "unchecked")
      para.addEventListener("click", checked);
      let span = document.createElement("span");
      span.innerHTML = "x";
      span.addEventListener("click", deleteToDo);
      li.appendChild(para);
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
