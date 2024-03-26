import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { addTitle } from '../redux/actions/formAction'
import { addNewTodo } from '../redux/actions/listAction'

import { Button, Input, } from '@mui/material'

const Form = ({ disabledButton, addMessage, messages }) => {
    const dispatch = useDispatch()
    const { title } = useSelector(state => state.form)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewTodo({ id: uuidv4(), title: title, isCompleted: false, isEditing: false }))
        dispatch(addTitle(''))
        addMessage(title)
    }


    return (
        <form onSubmit={e => handleSubmit(e)} className='add-todo'>
            <Input
                className='input-add'
                disableUnderline
                value={title}
                onChange={e => dispatch(addTitle(e.target.value))}
                placeholder='Enter todo-title'
                style={{
                    backgroundColor: '#21152b',
                    color: 'white',
                    fontSize: 18,
                    width: 500,
                    padding: '0 10px'
                }} />
            <Button
                onKeyPress={(e) => dispatch(addTitle(e.target.value))}
                type='submit' disabled={disabledButton(title)}
                style={{
                    backgroundColor: '#892ad6',
                    color: disabledButton(title) ? '#aaaaaa' : 'white',
                    borderRadius: 10,
                    margin: '0 10px'
                }}
            >Add Task</Button>
        </form>
    )
}

export default Form;