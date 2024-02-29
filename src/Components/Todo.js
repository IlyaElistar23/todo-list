import { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList';
import { Button, ConfigProvider, Typography } from 'antd'

const Todo = () => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

    const { Title } = Typography

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div className='todo'>
            <div className='todo-background'>
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSize: 25,
                        }
                    }}
                >
                    <Title>Todo list</Title>
                </ConfigProvider>
                <div className='todo-list'>
                    <AddTodo todos={todos} setTodos={setTodos} />
                    <TodoList todos={todos} setTodos={setTodos} />
                </div>
            </div>
            <ConfigProvider
                theme={{
                    token: {
                        colorLink: 'white',
                        fontSize: 24,
                    }
                }}
            >
                <Button className='logout' type='link'>Log out</Button>
            </ConfigProvider>
        </div>

    );
}


export default Todo