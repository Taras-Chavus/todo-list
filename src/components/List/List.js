import { useState } from "react";
import ListItem from "./ListItem/ListItem";

import styles from './List.module.scss'

const List = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    const onClickHandler = (input) => {
        const updatedList = [
            ...todo,
            input
        ];
        setTodo(updatedList);
        setInput('');
    }

    const handleKeyPress = (e) => {
        e.key === 'Enter' && onClickHandler(input);
    }

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
    }

    return (
        <div className={styles.container}>
            <input className={styles.textInput} placeholder="Write your to do" onKeyUp={handleKeyPress} onChange={onChangeHandler} type='text' value={input}/>
            <ul>
                {todo.map((el, i) =>
                <ListItem el={el} i={i}/>
                )}
            </ul>
            <button onClick={() => onClickHandler(input)}>Add To Do</button>
        </div>
    );
}

export default List;