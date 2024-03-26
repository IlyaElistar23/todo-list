import { EDIT_TITLE } from "../actions/editFormAction"

const initialState = {
    editTitle: ''
}

export const editFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_TITLE:
            return {...state, editTitle: action.payload}   
        default:
            return state
    }
}