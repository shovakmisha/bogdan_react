import Todo from "./Todo";
import styles from "./TodoList.module.css"

function TodoList( {todos, deleteDodo} ) {

    if(todos.length === 0) {
        return <h2>List is empty</h2>;
    }

    return (<div className={styles.todoListContainer}>
        {todos.map((value, index) => {
            return <Todo key={index} todo={value} deleteDodo={deleteDodo} index={index} />;
        })}
    </div>)
}

export default  TodoList;