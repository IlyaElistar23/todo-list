import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, completedTodo, editTodo, saveTodo } from '../redux/actions/listAction'
import { editForm } from '../redux/actions/editFormAction'
import Form from './Form'

import { List, ListItem, Typography, IconButton, Checkbox, Stack, Box, Input, FormControlLabel } from '@mui/material'
import { Delete, Edit, Save } from '@mui/icons-material'

const TodoList = ({
    disabledButton,
    messages,
    addMessage,
    toggleMessage,
    editMessage,
    editingMessage,
    removeMessage,
    activateMessage,
}) => {

    const { todos } = useSelector(state => state.list)
    const { editTitle } = useSelector(state => state.editForm)
    const dispatch = useDispatch()

    return (
        <div className='todo-background'>
            <Typography
                variant='body1'
                className='title'
                style={{
                    color: 'white',
                    fontSize: 36
                }}>Todo list</Typography>
            <Form
                disabledButton={disabledButton}
                addMessage={addMessage}
                messages={messages}
            />
            {
                todos.length === 0 &&
                <Typography
                    variant='body1'
                    style={{
                        color: 'white',
                        fontSize: 30,
                        marginTop: 20
                    }}>Список пуст</Typography>}
            <Box width={610}>
                <List>
                    {todos.map((todo) => (
                        <Stack
                            direction='row'
                            alignItems='center'
                            justifyContent='center'
                        >
                            {
                                todo.isEditing ?
                                    <ListItem style={{
                                        width: 635,
                                        marginBottom: '15px'
                                    }}>
                                        <Input
                                            className='input-add'
                                            value={editTitle}
                                            onChange={(e) => {
                                                dispatch(editForm(e.target.value))
                                            }}
                                            disableUnderline
                                            style={{
                                                backgroundColor: '#21152b',
                                                color: 'white',
                                                fontSize: 18,
                                                width: 540,
                                                padding: '0px 10px',

                                            }}
                                        />
                                        <Box sx={{ bgcolor: '#892ad6', borderRadius: '10px', margin: '0 0 0 10px' }}>
                                            <IconButton
                                                onClick={() => {
                                                    dispatch(saveTodo(todo, editTitle))
                                                    editMessage(todo.title)
                                                }}
                                                disabled={disabledButton(editTitle)}
                                                style={{
                                                    color: 'white',
                                                }}
                                            >
                                                <Save />
                                            </IconButton>
                                        </Box>
                                    </ListItem>
                                    :
                                    <ListItem
                                        key={todo.id}
                                        className='todo-item'
                                        style={{
                                            width: 595,
                                            height: 50,
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <div className='todo-info'>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        onClick={() => {
                                                            dispatch(completedTodo(todo))
                                                            if (todo.isCompleted) {
                                                                activateMessage(todo.title)
                                                            } else {
                                                                toggleMessage(todo.title)
                                                            }
                                                        }}
                                                        style={{
                                                            color: '#892ad6',
                                                        }}
                                                    />}
                                                label={todo.title}
                                                style={{
                                                    textDecoration: todo.isCompleted && 'line-through',
                                                    color: 'white'
                                                }} />
                                        </div>
                                        <div className='edit-buttons'>
                                            <IconButton onClick={() => {
                                                dispatch(editForm(todo.title))
                                                dispatch(editTodo(todo))
                                                editingMessage(todo.title)
                                            }}
                                            >
                                                <Edit style={{
                                                    color: 'white'
                                                }} />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => {
                                                    dispatch(removeTodo(todo))
                                                    removeMessage(todo.title)
                                                }}
                                            >
                                                <Delete style={{
                                                    color: 'white'
                                                }} />
                                            </IconButton>
                                        </div>
                                    </ListItem>
                            }
                        </Stack>
                    ))}
                </List>
            </Box>
        </div>
    )
}

export default TodoList