import { List, Input, Button } from 'antd'
import { useContext } from 'react';
import TodoContext from './TodoContext';

const ChangeTodo = () => {
    const { Item } = List;
    const dispatch = useContext(TodoContext)
    return (
        <Item>
            <Input/>
            <Button>Update</Button>
        </Item>
    )
}

export default ChangeTodo;