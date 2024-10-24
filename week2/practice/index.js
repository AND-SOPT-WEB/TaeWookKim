const input = document.querySelector(".input");
const button = document.querySelector(".addButton");
const todoList = document.querySelector(".todo-list");
let todos = [];

//화면 새로고침시 이벤트
function init(){
    loadToDOs();
    button.addEventListener("click", addTodo);
}

//local storage 저장
function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

//local storage 불러오기
function loadToDOs(){
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos !== null){
        const parsedToDos = JSON.parse(savedTodos);
        todos = parsedToDos;
        parsedToDos.forEach(createTodo);
    }
}

//추가 버튼 눌렀을때 이벤트
function addTodo(){
    const inputValue = input.value;
    createTodo(inputValue);
    saveTodo();
    input.value = "";
}

//목록 삭제 이벤트
function deleteTodo(){
    const removeLi = event.target.parentElement;
    const removeSpan = removeLi.querySelector('span');
    console.log(removeSpan.innerText);
    todos = todos.filter((item) => item !== removeSpan.innerText);
    removeLi.remove();
    saveTodo();
}

//목록 생성 이벤트
function createTodo(newTodo){
    const li =  document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    li.appendChild(span);
    li.appendChild(deleteButton);
    todos.push(newTodo);
    span.innerText = newTodo;
    deleteButton.innerText = "삭제";
    todoList.appendChild(li);
    deleteButton.addEventListener("click", deleteTodo);
}

init();

