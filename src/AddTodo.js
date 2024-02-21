import { Input, Button, Typography } from 'antd'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

const AddTodo = ({ todos, setTodos }) => {
    const [todoTitle, setTodoTitle] = useState('')

    const addTodo = () => {
        setTodos([...todos, {
            id: uuidv4(),
            title: todoTitle,
            completed: false,
        }])
        setTodoTitle('')
    }

    const { Title } = Typography;
    return (
        <>
            <Title>Todo List</Title>
            <Input
                placeholder='Enter your task'
                value={todoTitle}
                onChange={(event) => setTodoTitle(event.target.value)}
                onKeyPress={(event) => event.key === 'Enter' && addTodo()}
            />
            <Button onClick={() => addTodo()}>Add Task</Button>
        </>
    )
}

export default AddTodo;