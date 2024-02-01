import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from './TodosActions.module.css'
function TodosActions( {resetTodos, deleteCompletedTodos, completedTodoExist} ) {

    return (
        <div className={styles.todosActionsContainer}>
            <Button
                onClick={resetTodos}>
                <RiRefreshLine title="Reset Todos" />
            </Button>
            <Button
                onClick={deleteCompletedTodos}
                disable={String(!completedTodoExist)}>
                    <RiDeleteBin2Line title="Clear Completed Todos" />
            </Button>
        </div>
    )
}

export default TodosActions;