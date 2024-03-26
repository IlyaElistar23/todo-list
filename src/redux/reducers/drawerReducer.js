import { DRAWER_OPEN } from "../actions/drawerAction";

const initialState = {
    open: false
}

export const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case DRAWER_OPEN:
            return {...state, open: action.payload}
        default:
            return state
    }
}