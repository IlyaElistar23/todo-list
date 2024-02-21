import { useState, useEffect } from 'react'
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'
import TodoContext from './TodoContext';
// import ChangeTodo from './ChangeTodo';
import { Input, Button, Typography } from 'antd'


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const { Title } = Typography

  const addTodo = () => {
    setTodos([...todos, {
      id: uuidv4(),
      title: todoTitle,
      completed: false,
      visible: true
    }])
    setTodoTitle('')
  }

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
  const context = {removeTodo, toggleTodo}
  // const deleteTodo = (id) => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }

  // const toggleTodo = (id) => {
  //   setTodos(todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //   }))
  // }

  // const changeTodo = (id) => {
  //   setTodos(todos.map(todo => {
  //     if (todo.id === id) {
  //       return <ChangeTodo />
  //     }
  //   }))
  // }
  return (
    <TodoContext.Provider value={context}>
      <>
        <Title>Todo List</Title>
        <Input
          value={todoTitle}
          onKeyPress={(event) => event.key === 'Enter' && addTodo()}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
        <Button onClick={addTodo}>Add Task</Button>
      </>
      <TodoList todos={todos}/>
    </TodoContext.Provider>

  );
}

export default App;
