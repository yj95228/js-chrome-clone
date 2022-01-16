const toDoForm = document.getElementById("todo-form");

// same with document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDoArray = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDoArray = toDoArray.filter((toDo) => toDo.id !== parseInt(li.id)); 
    li.remove();
    saveToDo();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodo);
    saveToDo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if(savedToDo !== null){
    const parsedToDo = JSON.parse(savedToDo);
    toDoArray = parsedToDo;
    parsedToDo.forEach(paintToDo);
}