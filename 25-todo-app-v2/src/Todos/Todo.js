import styles from './Todo.module.css';
import {RiDeleteBack2Line, RiTodoFill} from "react-icons/ri";
import {FaCheck} from "react-icons/fa";

function Todo( {todo, deleteDodo, toggleTodo} ) {
    function removeItem() {
        deleteDodo(todo.id);
    }
    function handlerToggleTodo() {
        toggleTodo(todo.id);
    }

    return (<div className={ `${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
        <RiTodoFill className={styles.todoIcon} />
        <div className={styles.todoText}>{todo.text}</div>
        <RiDeleteBack2Line className={styles.deleteIcon} onClick={removeItem} />
        <FaCheck className={styles.checkIcon} onClick={handlerToggleTodo} />
    </div>);
}

export default Todo;