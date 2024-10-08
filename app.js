const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheckbox);
filterOption.addEventListener("click", filterTodo);

function addToDo(event) {
  event.preventDefault();
  //   console.log("hello world");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = "hey world";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeBtn.classList.add("complete-btn");

  todoDiv.appendChild(completeBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  trashBtn.classList.add("trash-btn"); // Fix the typo here

  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);
}

function addToDo(event) {
  event.preventDefault();
  //   console.log("hello world");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeBtn.classList.add("complete-btn");

  todoDiv.appendChild(completeBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  trashBtn.classList.add("trash-btn");

  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);

  todoInput.value = " ";
}

function deleteCheckbox(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "un-completed":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
