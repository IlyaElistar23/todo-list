import { useState, useEffect } from 'react'
import './App.css';

import { Input, Button, Typography } from 'antd'
import AddTodo from './AddTodo';
import TodoList from './TodoList';


function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])



  // const removeTodo = (id) => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }
  // const toggleTodo = (id) => {
  //   setTodos(todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   }))
  // }
  return (
    <>
      <AddTodo todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>


  );
}

export default App;
