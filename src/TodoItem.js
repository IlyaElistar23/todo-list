import { List, Typography, Button, Checkbox } from 'antd'
import { useContext, useState } from 'react';
import TodoContext from './TodoContext';


const TodoItem = ({ title, id, completed, visible }) => {
    const { Text } = Typography;
    const { Item } = List;
    const [showTask, setShowTask] = useState(visible)
    const {removeTodo, toggleTodo} = useContext(TodoContext)
    const changeTodo = (key) => {
        if (key === id) {
            console.log(key);
            console.log(id);
            setShowTask(!showTask)
            console.log(visible);
        }
    }
    return (
        <Item>
            <>
                <Checkbox
                    checked={completed}
                    onChange={() => toggleTodo(id)}
                />
                <Text>{title}</Text>
                <Button onClick={() => changeTodo(id)}>Change</Button>
                <Button onClick={() => removeTodo(id)}>Delete</Button>
            </>
        </Item>
    )
}

export default TodoItem;