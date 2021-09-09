var post = document.getElementById("ButtonPost");
var del = document.getElementById("ButtonDelete");
var clear = document.getElementById("ButtonClear");
var mark = document.getElementById("ButtonMark");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(event) {
  event.preventDefault();

  var todo = document.getElementById("todoText").value;
  var list = document.getElementById("listOfTodos");

  var div = document.createElement("div");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.name = "todo";
  label.textContent = todo;

  div.appendChild(checkbox);
  div.appendChild(label);

  list.appendChild(div);
  var todo = document.getElementById("todoText").value = "";
}

function TodoMark() {
  var todos = document.getElementsByName("todo");
  for (var i = 0; i < todos.length; i++) {
    todos[i].checked = true;
  }
}

function TodoClear() {
  var todos = document.getElementsByName("todo");
  for (var i = 0; i < todos.length; i++) {
    todos[i].checked = false;
  }
}

function TodoDel() {

 /* var todos = document.getElementsByName("todo");
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].checked) {
      todos[i].parentElement.remove();
    }
  }
  */

  var list = document.getElementById("todoList");
  list.innerHTML = ""
}
