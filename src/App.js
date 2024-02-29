import { useState, useEffect } from 'react'
import './App.css';
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList';
import { Button, ConfigProvider, Typography } from 'antd'

function App() {

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

export default App;
