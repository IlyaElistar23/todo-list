import Todo from "./Components/Todo";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/todo-list" element={<Todo/>}/>
    </Routes>
  )
}

export default App;
