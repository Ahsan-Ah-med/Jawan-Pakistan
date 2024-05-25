const firebaseConfig = {
  apiKey: "AIzaSyAf9JbVmYPGTm-KstU5m-Qj2OOLKaFQ2y0",
  authDomain: "todo-database-a5865.firebaseapp.com",
  projectId: "todo-database-a5865",
  databaseURL: "https://todo-database-a5865-default-rtdb.firebaseio.com",
  storageBucket: "todo-database-a5865.appspot.com",
  messagingSenderId: "690050717221",
  appId: "1:690050717221:web:465d24883b42a9204891cc",
  measurementId: "G-XXD5FTTJZ2",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// console.log(app)

const dbData = firebase.database();
// console.log(dbData)

document.addEventListener("DOMContentLoaded", function () {
  var todoInput = document.getElementById("todoInput");
  var addTodoBtn = document.getElementById("addTodoBtn");
  var todoList = document.getElementById("todoList");
  var currData;
  firebase
    .database()
    .ref("todoData")
    .on("child_added", function (data) {
      // console.log(data.val());
      currData = data.val();
      if (currData !== "") {
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = currData.dataValue;

        var editBtn = document.createElement("button");
        editBtn.className = "editBtn btn btn-danger btn-sm float-right";
        editBtn.innerText = "Edit";
        editBtn.setAttribute("dataID", currData.dataKey);
        editBtn.addEventListener("click", function (e) {
          // todoList.removeChild(li);
          var updateData = prompt("Click Here");
          li.innerText = updateData;
          li.appendChild(deleteBtn);
          li.appendChild(editBtn);
          firebase
            .database()
            .ref("todoData/" + e.target.getAttribute("dataID"))
            .set({
              dataKey: e.target.getAttribute("dataID"),
              dataValue: updateData,
            });
        });
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm float-right";
        deleteBtn.innerText = "Delete";
        deleteBtn.setAttribute("dataID", currData.dataKey);
        deleteBtn.addEventListener("click", function (e) {
          todoList.removeChild(li);
          firebase
            .database()
            .ref("todoData/" + e.target.getAttribute("dataID"))
            .remove();
        });

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        todoList.appendChild(li);

        todoInput.value = "";
      } else {
        alert("Please enter a todo!");
      }
    });
  console.log(currData);
  addTodoBtn.addEventListener("click", function () {
    dataID = Date.now().toString(25);

    var todoData = {
      dataKey: dataID,
      dataValue: todoInput.value.trim(),
    };
    // console.log(todoData)
    firebase
      .database()
      .ref("todoData/" + dataID)
      .set(todoData);

    // var todoText = todoInput.value.trim();
  });
});
