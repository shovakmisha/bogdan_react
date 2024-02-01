import {useState} from "react";
import styles from './TodoForm.module.css';
import Button from "../UI/Button";

function TodoForm({addTodo}) {

    const [text, setText] = useState('');
    function onSubmitHandler(e) {
        e.preventDefault();

        setText('');

        if(text) {
            addTodo(text);
        }
    }

    return (
        <div className={styles.todoFormContainer}>
            <form action="" onSubmit={onSubmitHandler}>
                <input placeholder="Enter new todo"
                       name="todo-input-name"
                       value={text}
                       onChange={(event) => setText(event.target.value)}/>
                <Button type="submit" title="Submit">Submit</Button>
            </form>
        </div>
    )
}

export default TodoForm;