import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, completedTodo, editTodo, saveTodo } from '../redux/actions/listAction'
import Form from './Form'

import { List, ListItem, Typography, Button, Checkbox, Stack, Box, Input } from '@mui/material'

const Users = () => {

    const { todos } = useSelector(state => state.list)
    const dispatch = useDispatch()

    return (
        <>
            <Form />
            {todos.length === 0 && <Typography variant='body1'>Список пуст</Typography>}
            <Box width={400}>
                <List>
                    {todos.map((todo) => (
                        <Stack direction='row' alignItems='center' justifyContent='center'>
                            {
                                todo.isEditing ?
                                    <>
                                        <Input/>
                                        <Button>Сохранить</Button>
                                    </>
                                    :
                                    <ListItem key={todo.id}>
                                        <Checkbox onClick={() => dispatch(completedTodo(todo))} />
                                        <Typography variant='body1' style={{ textDecoration: todo.isCompleted && 'line-through' }}>{todo.title}</Typography>
                                        <Button onClick={() => dispatch(editTodo(todo))}>Изменить</Button>
                                        <Button onClick={() => dispatch(removeTodo(todo))}>Удалить</Button>
                                    </ListItem>
                            }
                        </Stack>
                    ))}
                </List>
            </Box>
        </>
    )
}

export default Users