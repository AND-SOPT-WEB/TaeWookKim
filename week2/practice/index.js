const todoList = document.querySelector(".todo-list");
const button = document.querySelector(".addButton");

const buttonClick = () =>{
    const inputText = document.querySelector("input").value;
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = inputText;
    todoList.appendChild(li);
    li.appendChild(deleteButton);

    deleteButton.textContent="삭제";
    const buttonDelete = () => {
        todoList.removeChild(li);
    }
    deleteButton.addEventListener("click", buttonDelete);

}

button.addEventListener("click", buttonClick);