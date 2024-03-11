import Todo from "./Components/Todo";
import AuthForm from './Components/AuthForm'
import RegForm from './Components/RegForm'
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/login" element={<AuthForm/>}/>
      <Route path="/register" element={<RegForm/>}/>
      <Route path="/todo-list" element={<Todo/>}/>
    </Routes>
  )
}

export default App;
