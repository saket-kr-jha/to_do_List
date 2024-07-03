const store = {
    todos: [
      {
        id: "1",
        title: "Complete Task A",
        completed: false,
      },
      {
        id: "2",
        title: "Read Book",
        completed: true,
      },
    ],
  };

  const storeHandler = {
    get(target, property){
        console.log("Oh you are trying to get ", property)
        return target[property]
    },

    set(target, property, value) {
      target[property] = value;
      if (property == "todos") {
        window.dispatchEvent(new Event("todoschange"));
      }
      localStorage.setItem("store", JSON.stringify(store));
      return true;
    },
  };

  const storeProxy = new Proxy(store, storeHandler)

  function addTodo(newTodo){
    storeProxy.todos = [...storeProxy.todos, newTodo];
  }

  function deleteTodo(id){
    storeProxy.todos = storeProxy.todos.filter((todo) => todo.id != id)
  }

  function toggleCompleted(id, completed){
    storeProxy.todo = storeProxy.todo.map((todo)=>{
        if(todo.id === id){
            return { ...todo, completed: completed}
        } else{
            return todo;
        }
    })
  }

  export default storeProxy;
  export {addTodo, deleteTodo, toggleCompleted};