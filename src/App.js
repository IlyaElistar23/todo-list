import './App.css';
import TodoList from './components/TodoList';
import { IconButton, Typography, Drawer, List, ListItem, Box } from '@mui/material'
import { FormatListBulleted, Logout } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { drawerAction } from '../src/redux/actions/drawerAction'
import withLogger from './components/HOC/withLogger';

function App({
  messages,
  addMessage,
  toggleMessage,
  editMessage,
  editingMessage,
  removeMessage,
  activateMessage,
}) {

  const dispatch = useDispatch()
  const { open } = useSelector(state => state.drawer)

  const disabledButton = (title) => {
    if (title.length === 0 || title.trim().length === 0) {
      return true
    }
  }

  // const DrawerList = (
  //   <Box sx={{ width: 300 }} role="presentation" onClick={() => dispatch(drawerAction(false))}>
  //     <List>
  //       {drawerList.map(item => (
  //         <ListItem key={item}>{item}</ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <>
      <header className='header'>
        <IconButton
          onClick={() => dispatch(drawerAction(true))}
          style={{
            color: 'white',
          }}>
          <FormatListBulleted />
          <Typography
            variant='body1'
            style={{
              fontSize: 20
            }}>History</Typography>
        </IconButton>
        <Drawer open={open} anchor='right' onClose={() => dispatch(drawerAction(false))}>
          <Box sx={{width: 300}} onClick={() => dispatch(drawerAction(false))}>
            <List>
              {messages.map(message => (
                <ListItem key={message}>
                  {message}
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <IconButton
          style={{
            color: 'white'
          }}
        >
          <Logout />
          <Typography
            variant='body1'
            style={{
              fontSize: 20
            }}
          >Log out</Typography>
        </IconButton>
      </header>
      <div className="todo">
        <TodoList
          disabledButton={disabledButton}
          messages={messages}
          addMessage={addMessage}
          toggleMessage={toggleMessage}
          editMessage={editMessage}
          editingMessage={editingMessage}
          removeMessage={removeMessage}
          activateMessage={activateMessage} />
      </div>
      <footer>Made by Elistar in 2024.</footer>
    </>
  );
}

export default withLogger(App);
