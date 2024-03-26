import { ADD_MESSAGE } from "../actions/drawerListAction";

const initialState = {
    messages: []
}

export const drawerListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] }
        default:
            return state
    }
}