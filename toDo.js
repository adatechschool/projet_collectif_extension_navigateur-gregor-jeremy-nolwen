let ul = document.getElementById("tasksList");
let myList = document.getElementsByTagName("li");
let myListSpan = document.getElementsByTagName("span");
let tasks = [];

document.getElementById("submitToDo").addEventListener("click", addToDo);

function addToDo() {
  let todo = document.getElementById("todo").value;
  if (todo === "") alert("You must write something !");
  else {
    tasks.push(todo);
    //sauvegarde dans le localStorage
    localStorage.setItem("tasks", tasks);
    document.getElementById("todo").value = "";
    let li = document.createElement("li");
    li.innerHTML = todo;
    li.addEventListener("click", checked);
    let span = document.createElement("span");
    span.innerHTML = "x";
    span.addEventListener("click", deleteToDo);
    li.appendChild(span);
    ul.appendChild(li);
  }
}
function checked() {
  let classLi = this.getAttribute("class");
  if (classLi === "checked") this.setAttribute("class", "unchecked");
  else {
    this.setAttribute("class", "checked");
    // get task text
    let taskText = this.innerHTML;
    // remove task from tasks array
    let index = tasks.indexOf(taskText);
    tasks.splice(index, 1);
    // update local storage
    localStorage.setItem("tasks", tasks);
  }
}

function deleteToDo() {
  let taskToRemove = this.parentElement.innerHTML;
  let index = tasks.indexOf(taskToRemove);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", tasks.toString());
  ul.removeChild(this.parentElement);
}

//recuperation du local storage
window.onload = function () {
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = storedTasks.split(",");
    for (let i = 0; i < tasks.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = tasks[i];
      li.addEventListener("click", checked);
      console.log("onload,checked");
      let span = document.createElement("span");
      span.innerHTML = "x";
      span.addEventListener("click", deleteToDo);
      console.log("onload, delete");
      li.appendChild(span);
      ul.appendChild(li);
    }
  }
};

/* copy to clipboard */
function copyTasks() {
  let range = document.createRange();
  range.selectNode(ul);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  alert("Tasks copied to clipboard!");
}

copyBtn.addEventListener("click", copyTasks);
