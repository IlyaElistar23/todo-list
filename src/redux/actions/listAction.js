export const ADD_NEW_TODO = 'ADD_NEW_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const COMPLETED_TODO = 'COMPLETED_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const SAVE_TODO = 'SAVE_TODO'

export const addNewTodo = (todo) => {
    return {
        type: ADD_NEW_TODO,
        payload: todo
    }
}

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        payload: todo.id
    }
}

export const completedTodo = (todo) => {
    return {
        type: COMPLETED_TODO,
        payload: todo.id
    }
}

export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        payload: todo.id
    }
}

export const saveTodo = (todo, editTitle) => {
    return {
        type: SAVE_TODO,
        payload: {
            id: todo.id,
            title: editTitle
        }
    }
}