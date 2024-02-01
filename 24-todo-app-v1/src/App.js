import {useState} from "react";
import './App.css';
import TodoForm from "./Todos/TodoForm";
import TodoList from "./Todos/TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    setTodos([...todos, text]);
  }

  function deleteTodoHandler(index) {

    // todos.map((value, i) => {
    //   if(i === index) {
    //     return;
    //   }
    //   return value;
    // })

    setTodos(todos.filter((_, idx) => idx !== index));
  }

  return <div className="App">
    <h1>Todo App</h1>
    <TodoForm  addTodo={addTodoHandler} />
    <TodoList todos={todos} deleteDodo={deleteTodoHandler} />
  </div>
}

export default App
