var ul = document.getElementsByTagName("ul")[0];
var MyList = document.getElementsByTagName("li");
var MyListSpan = document.getElementsByTagName("span");

function addToDo() {
    var todo = document.getElementById("todo").value;
    if (todo ==="") alert("You must write something !");
    else {
        document.getElementById("todo").value = "";
        var li = document.createElement("li");
        li.innerHTML = todo;
        var span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        ul.appendChild(li);
    }
}