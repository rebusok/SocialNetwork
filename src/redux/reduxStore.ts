import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import usersReducer from "./usersReducer";
import AuthReducer from "./authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

type  RootReduceType = typeof reducers;
export type AppStateType = ReturnType<RootReduceType>
const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    usersPage:usersReducer,
    auth: AuthReducer,
    form: formReducer
});

const store:any = createStore(reducers, applyMiddleware(thunk));
//@ts-ignore
window.store = store

export default store;