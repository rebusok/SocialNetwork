import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import usersReducer from "./usersReducer";
import AuthReducer from "./authReducer";

type  RootReduceType = typeof reducers;
export type AppStateType = ReturnType<RootReduceType>
const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    usersPage:usersReducer,
    auth: AuthReducer
});

const store:any = createStore(reducers);



export default store;