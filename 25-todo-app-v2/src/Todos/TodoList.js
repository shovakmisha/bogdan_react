import Todo from "./Todo";
import styles from "./TodoList.module.css"

function TodoList( {todos, deleteDodo, toggleTodo} ) {

    if(todos.length === 0) {
        return <h2 style={{marginTop: '30px'}}>List is empty</h2>;
    }

    return (<div className={styles.todoListContainer}>
        {todos.map((value) => {
            return <Todo key={value.id} todo={value} deleteDodo={deleteDodo} toggleTodo={toggleTodo} />;
        })}
    </div>)
}

export default  TodoList;