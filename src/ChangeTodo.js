import { List, Input, Button } from 'antd'

const ChangeTodo = ({ title, id, completed, visible }) => {
    const { Item } = List;
    // const {dispatch, state} = useContext(TodoContext)
    return (
        <Item>
            <Input
                value={title}
                key={id}
            />
            <Button>Update</Button>
        </Item>
    )
}

export default ChangeTodo;