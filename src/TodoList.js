import TodoItem from "./TodoItem";
import { List } from 'antd'

const TodoList = ({todos}) => {

    return (
        <List>
            {todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </List>
    )
}

export default TodoList;