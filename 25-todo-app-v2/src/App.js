import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from "./Todos/TodoForm";
import TodoList from "./Todos/TodoList";
import TodosActions from "./Todos/TodosActions";

function App() {

  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo]);
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodoHandler(id) {
    setTodos(todos.map(todo => {
      if(id === todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    }));
  }

  function resetTodosHandler() {
    setTodos([]);
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return <div className="App">
    <h1>Todo App</h1>
    <TodoForm  addTodo={addTodoHandler} />
    { todos.length ?
        <TodosActions
            completedTodoExist={!!completedTodosCount}
            resetTodos={resetTodosHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
        /> : ''
    }
    <TodoList todos={todos} deleteDodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
    {completedTodosCount > 0 && <h2>{`Yo have completed ${completedTodosCount} todos`}</h2>}
  </div>
}

export default App
