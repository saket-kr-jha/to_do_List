import render from "./render.js";
import { addTodo } from "./store.js";

window.addEventListener("todoschange", () =>{
    render();
})
render()

const form = document.querySelector("#form");
const todoTitleInput = document.querySelector(".todo-title-input");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const todoTitle = todoTitleInput.value;
    const newTodo = {id: crypto.randomUUID(), title:todoTitle , completed:false}
    addTodo(newTodo);
})