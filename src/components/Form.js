import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { addTitle } from '../redux/actions/formAction'
import { addNewTodo } from '../redux/actions/listAction'

import { Button, Input, } from '@mui/material'

const Form = () => {
    const dispatch = useDispatch()
    const { title } = useSelector(state => state.form)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addNewTodo({id: uuidv4(), title: title, isCompleted: false, isEditing: false}))
        dispatch(addTitle(''))
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <Input value={title} onChange={e => dispatch(addTitle(e.target.value))}/>
            <Button type='submit'>Создать</Button>
        </form>
    )
}

export default Form;