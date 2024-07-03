import render from "./render.js";
import { addTodo, deleteTodo, toggleCompleted } from "./store.js";

window.addEventListener("todoschange", () =>{
    render();
})

const storeFromLocal = JSON.parse(localStorage.getItem("store"));
if(storeFromLocal.todos.length > 0){
    store.todos = storeFromLocal.todos;
} else {
    localStorage.setItem("store", JSON.stringify(store));
    render();
}

const form = document.querySelector("#form");
const todoTitleInput = document.querySelector(".todo-title-input");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const todoTitle = todoTitleInput.value;
    const newTodo = {id: crypto.randomUUID(), title:todoTitle , completed:false}
    addTodo(newTodo);
})

const todos = document.querySelector(".todos");

todos.addEventListener("click", (e)=>{
    const target = e.target;
    if(target.classList.contains("delete-todo-button")){
        const id = target.closest(".todo").dataset.id;
        deleteTodo(id);
    }
})

todos.addEventListener("change", (e)=>{
    const target = e.target;
    if(target.classList.contains("todo-checkbox")){
        const id = target.closest(".todo").dataset.id;
        const completed = target.checked;
        toggleCompleted(id, completed)
    }
})