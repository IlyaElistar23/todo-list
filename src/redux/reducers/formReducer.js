import { ADD_TITLE } from '../actions/formAction'

const initialState = {
    title: ''
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TITLE:
            return {
                ...state,
                title: action.payload
            }
        default:
            return state
    }
}