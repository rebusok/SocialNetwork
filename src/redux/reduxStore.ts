import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';

type  RootReduceType = typeof reducers;
export type AppStateType = ReturnType<RootReduceType>
const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer
});

const store:any = createStore(reducers);



export default store;