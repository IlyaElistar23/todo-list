export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessageToDrawerList = (message) => {
    return {
        type: ADD_MESSAGE,
        payload: message
    }
}