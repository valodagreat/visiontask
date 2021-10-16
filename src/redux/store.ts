import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userRegisterReducer, userLoginReducer } from './User/userReducers';


const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
});


export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) );

export default store;