import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer, { ProfileACTypes } from './profileReducer';
import dialogReducer, {ActionType} from './dialogReducer';
import usersReducer, { usersACTypes } from "./usersReducer";
import AuthReducer, {authACTypes} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
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
export type AppActionType = ProfileACTypes | ActionType | authACTypes | usersACTypes
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionType
    >
//@ts-ignore
window.store = store

export default store;