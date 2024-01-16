import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';

import styles from './ListItem.module.scss';

const ListItem = memo(({ todo, setTodo }) => {

    const handleCheckboxChange = (itemId) => {
        const updatedCheckbox = todo.map(item => 
            item.id === itemId ? {...item, completed: !item.completed} : item
            );
        setTodo(updatedCheckbox);
    };

    return (
        <ul className={styles.todoArea}>

            {todo.map(item => (
                <li className={styles.todoContainer} key={item.id}>
                    <input 
                        key={item.id} 
                        onChange={() => handleCheckboxChange(item.id)}
                        checked={item.completed}
                        type="checkbox" 
                        name={`checkbox-${item.id}`}
                        id={`checkbox-${item.id}`}
                    />
                    <label 
                        key={uuidv4()}  
                        htmlFor={`checkbox-${item.id}`}>
                            { item.input }
                    </label>
                </li>
            ))}
        </ul>
    );
})

export default ListItem;
