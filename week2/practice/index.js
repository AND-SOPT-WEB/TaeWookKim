const todoList = document.querySelector(".todo-list");
const button = document.querySelector(".addButton");
const input = document.querySelector("input");
let todos = JSON.parse(localStorage.getItem("todos"))||[];
let i = 0;

while (i<todos.length){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = todos[i];
    todoList.appendChild(li);
    li.appendChild(deleteButton);
    deleteButton.textContent="삭제";
    deleteButton.addEventListener("click", () => buttonDelete(li));
    i++;
}

const buttonDelete = (li) => {
    todoList.removeChild(li);
    let todoToDelete = li.textContent; 
     // li.textContent를 하면 input.value에 deleteButton.textContent인 "삭제"가 뒤에 붙어 아래와 같이 코드 작성
    let fixedTodos = todos.filter((item) => item + "삭제" !== todoToDelete);
    localStorage.setItem("todos",JSON.stringify(fixedTodos));
}

const buttonClick = () => {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    /*todos 배열에 입력값 넣기*/
    todos.push(input.value);
    /*todos 배열을 localStorage에 저장*/
    localStorage.setItem("todos",JSON.stringify(todos));
    li.textContent = input.value;
    todoList.appendChild(li);
    li.appendChild(deleteButton);
    deleteButton.textContent="삭제";
    deleteButton.addEventListener("click", () => buttonDelete(li));
    input.value = null;
}

button.addEventListener("click", buttonClick);