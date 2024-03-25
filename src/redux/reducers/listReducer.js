import { ADD_NEW_TODO, REMOVE_TODO, COMPLETED_TODO, EDIT_TODO, SAVE_TODO } from "../actions/listAction";

const initialState = {
    todos: []
}

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            return { ...state, todos: [...state.todos, { ...action.payload }] }
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
        case COMPLETED_TODO:
            return { ...state, todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo) }
        case EDIT_TODO:
            return { ...state, todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, isEditing: !todo.isEditing} : todo) }
        case SAVE_TODO:
            return {...state, todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, title: action.payload.title} : todo)}
        default:
            return state
    }
}
