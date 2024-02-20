import { List, Typography, Button, Checkbox } from 'antd'
import { useContext } from 'react';
import TodoContext from './TodoContext';


const TodoItem = ({ title, id, completed }) => {
    const { Text } = Typography;
    const { Item } = List;
    const dispatch = useContext(TodoContext)
    return (
        <Item>
            <>
                <Checkbox
                    checked={completed}
                    onChange={() => dispatch({
                        type: 'toggle',
                        title: id
                    })}
                />
                <Text>{title}</Text>
                <Button onClick={() => dispatch({
                    type: 'change',
                    title: id
                })
                }>Change</Button>
                <Button onClick={() => dispatch({
                    type: 'remove',
                    title: id
                })}>Delete</Button>
            </>
        </Item>
    )
}

export default TodoItem;