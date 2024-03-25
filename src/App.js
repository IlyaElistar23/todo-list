import './App.css';
import Users from './components/Users';
import { Typography } from '@mui/material'

function App() {
  return (
    <div className="App">
      <Typography variant='h3'>Список пользователей</Typography>
      <Users/>
    </div>
  );
}

export default App;
