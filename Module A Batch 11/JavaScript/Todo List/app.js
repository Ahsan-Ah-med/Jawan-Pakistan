document.addEventListener("DOMContentLoaded", function () {
  var todoInput = document.getElementById("todoInput");
  var addTodoBtn = document.getElementById("addTodoBtn");
  var todoList = document.getElementById("todoList");

  addTodoBtn.addEventListener("click", function () {
    var todoText = todoInput.value.trim();
    if (todoText !== "") {
      var li = document.createElement("li");
      li.className = "list-group-item";
      li.innerText = todoText;

      var deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger btn-sm float-right";
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", function () {
        todoList.removeChild(li);
      });

      li.appendChild(deleteBtn);
      todoList.appendChild(li);

      todoInput.value = "";
    } else {
      alert("Please enter a todo!");
    }
  });
});
