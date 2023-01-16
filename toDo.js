var ul = document.getElementsByTagName("ul")[0];
var myList = document.getElementsByTagName("li");
var myListSpan = document.getElementsByTagName("span");
var tasks = [];

document.getElementById('submitToDo').addEventListener('click', addToDo);

function addToDo() {
  var todo = document.getElementById("todo").value;
  if (todo === "") alert("You must write something !");
  else {
    tasks.push(todo);
    //sauvegarde dans le localStorage
    localStorage.setItem("tasks", tasks.toString());
    document.getElementById("todo").value = "";
    var li = document.createElement("li");
    li.innerHTML = todo;
    li.addEventListener("click", checked);
    var span = document.createElement("span");
    span.innerHTML = "x";
    span.addEventListener("click", deleteToDo);
    li.appendChild(span);
    ul.appendChild(li);
  }
}
function checked() {
  var classLi = this.getAttribute("class");
  if (classLi === "checked") this.setAttribute("class", "unchecked");
  else this.setAttribute("class", "checked");
}
function deleteToDo() {
  var taskToRemove = this.parentElement.innerHTML;
  var index = tasks.indexOf(taskToRemove);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", tasks.toString());
  ul.removeChild(this.parentElement);
}

//recuperation du local storage
window.onload = function () {
  var storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = storedTasks.split(",");
    for (var i = 0; i < tasks.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = tasks[i];
      li.addEventListener("click", checked);
      var span = document.createElement("span");
      span.innerHTML = "x";
      span.addEventListener("click", deleteToDo);
      li.appendChild(span);
      ul.appendChild(li);
    }
  }
};

/* copy to clipboard */
function copyTasks() {
  var range = document.createRange();
  range.selectNode(ul);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  alert("Tasks copied to clipboard!");
}

copyBtn.addEventListener("click", copyTasks);




