import { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList';
import { Button, ConfigProvider, Typography } from 'antd'
import checkAuth from './HOC/checkAuth';
import axios from 'axios';

const Todo = ({ token }) => {

    const [todos, setTodos] = useState([])

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }

    const config = { headers }

    const fetchData = async () => {
        try {
            const response = await axios.get('https://todo-redev.herokuapp.com/api/todos', config)
            console.log('Данные получены: ', response.data);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
    const getTasks = async () => {
        const tasks = await fetchData()
        setTodos(tasks)
    }

    useEffect(() => {
        getTasks()
    }, [])

    const { Title } = Typography

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
                    <AddTodo todos={todos} setTodos={setTodos} config={config} />
                    <TodoList todos={todos} setTodos={setTodos} config={config} />
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


export default checkAuth(Todo)