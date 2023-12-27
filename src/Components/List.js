import { useState } from "react";
import ListItem from "./ListItem";

import './List.css'

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
        <>
            <input placeholder="Write your to do" className="input" onKeyUp={handleKeyPress} onChange={onChangeHandler} value={input}/>
            <ol>
                {todo.map((el, i) =>
                <ListItem el={el} i={i}/>
                )}
            </ol>
            <button className="btn" onClick={() => onClickHandler(input)}>Add To Do</button>
        </>
    );
}

export default List;