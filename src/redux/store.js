import { formReducer } from "./reducers/formReducer"
import { listReducer } from "./reducers/listReducer"
import { editFormReducer } from "./reducers/editFormReducer"

import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

const rootReducers = combineReducers({
    form: formReducer,
    list: listReducer,
    editForm: editFormReducer
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware()))

export default store