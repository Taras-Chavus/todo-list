import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ListItem from "./ListItem/ListItem";

import styles from './List.module.scss'

const List = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    const onClickHandler = (input) => {
        if(input.trim() !== ''){
            const updatedList = [...todo, { input, completed: false, id: uuidv4()}];
            setTodo(updatedList);
            setInput('');
        }
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
            <input 
                className={styles.textInput} 
                placeholder="Write your to do" 
                onKeyUp={handleKeyPress} 
                onChange={onChangeHandler} 
                type='text' 
                value={input}/>

                {todo.length > 0 && <ListItem todo={todo} setTodo={setTodo}/>}

            <button onClick={() => onClickHandler(input)}>Add To Do</button>
        </div>
    );
}

export default List;
