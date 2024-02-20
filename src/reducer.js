import { v4 as uuidv4 } from "uuid"
import ChangeTodo from "./ChangeTodo"

export default function (state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: uuidv4(),
                    title: action.title,
                    completed: false
                }
            ]
        case 'toggle':
            return state.map(todo => {
                if (todo.id === action.title) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        case 'change':
            return state.map(todo => {
                if (todo.id === action.title) {
                    return <ChangeTodo />
                }
            })
        case 'remove':
            return state.filter(todo => todo.id !== action.title)
        default:
            return state
    }
}