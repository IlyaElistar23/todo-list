import { useReducer, useState, useEffect } from 'react'
import './App.css';
import TodoList from './TodoList';
// import { v4 as uuidv4 } from 'uuid'
import TodoContext from './TodoContext';
// import ChangeTodo from './ChangeTodo';
import { Input, Button, Typography } from 'antd'
import reducer from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const { Title } = Typography

  const addTodo = () => {
    dispatch({
      type: 'add',
      title: todoTitle,
    })
    setTodoTitle('')
  }

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
    <TodoContext.Provider value={dispatch}>
      <>
        <Title>Todo List</Title>
        <Input
          value={todoTitle}
          onKeyPress={(event) => event.key === 'Enter' && addTodo()}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
        <Button onClick={addTodo}>Add Task</Button>
      </>
      <TodoList todos={state}/>
    </TodoContext.Provider>

  );
}

export default App;
