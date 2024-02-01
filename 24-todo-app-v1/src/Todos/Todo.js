import styles from './Todo.module.css';
import { RiTodoFill } from "react-icons/ri";

function Todo( {todo, deleteDodo, index} ) {

    function removeItem() {
        deleteDodo(index);
    }

    return (<div className={styles.todo} onDoubleClick={removeItem}>
        <RiTodoFill className={styles.todoIcon} />
        <div className={styles.todoText}>{todo}</div>
    </div>);
}

export default Todo;