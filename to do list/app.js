let todos = document.getElementById("todos");
let btn = document.getElementById("add-button");

btn.onclick = () => {
  let todoTextInput = document.getElementById("todo-text");
  let inputText = todoTextInput.value.trim();

  if (inputText !== "") {
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo");
    newTodo.textContent = `${todos.childElementCount + 1}. ${inputText}`;
    todos.appendChild(newTodo);
    todoTextInput.value = "";
  } else {
    console.log("Please enter a todo");
  }
};
