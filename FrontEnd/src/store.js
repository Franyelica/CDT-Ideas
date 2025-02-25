import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { patentsReducer, patentReducer, patentDetailsReducer, newPatentReducer } from './reducers/patentReducers'
import { authReducer, userReducer, forgotPasswordReducer, allUserReducer, userDetailsReducer, newUserReducer } from './reducers/userReducers';

const reducer = combineReducers({
    patents: patentsReducer,
    patentDetails: patentDetailsReducer,
    newPatent: newPatentReducer,
    patent: patentReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUserReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    newUser: newUserReducer
})



let initialState = {}

const middlware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))
export default store;