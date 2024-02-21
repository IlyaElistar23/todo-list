import { Input, Button, Typography, Checkbox, List } from 'antd'
import { useState } from 'react';

const TodoList = ({ todos, setTodos }) => {
    const [edit, setEdit] = useState(null)
    const [editText, setEditText] = useState('')
    const { Text } = Typography;
    const { Item } = List;

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const editTodo = (id, title) => {
        setEdit(id)
        setEditText(title)
    }

    const saveTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.title = editText
            }
            return todo
        }))
        setEdit(null)
    }
    return (
        <List>
            {
                todos.map(todo => (
                    <Item key={todo.id}>
                        {
                            edit === todo.id ?
                                <>
                                    <Input value={editText} onChange={(event) => setEditText(event.target.value)} />
                                    <Button onClick={() => saveTodo(todo.id)}>Save</Button>
                                </>
                                :
                                <>
                                    <Checkbox
                                        checked={todos.completed}
                                        onChange={() => toggleTodo(todo.id)}
                                    />
                                    <Text>{todo.title}</Text>
                                    <Button onClick={() => editTodo(todo.id, todo.title)}>Edit</Button>
                                    <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
                                </>
                        }
                    </Item>
                )
                )
            }
        </List>
    )
}

export default TodoList;