import {DialogPageType} from './store';
import {v1} from "uuid";
import {Dispatch} from "redux";

export type DialogDispatchType = Dispatch<ActionType>
export type ActionType =
    addMessageActionCreatorType;


export type addMessageActionCreatorType = {
    type: "ADD-MES",
    message: string
}
const initialState = {
    dialogs:[
        {id:v1(), name:'Yuri'},
        {id:v1(), name:'Grish'},
        {id:v1(), name:'Masha'},
        {id:v1(), name:'Petro'},
        {id:v1(), name:'dds'},
        {id:v1(), name:'Ula'}
    ],
    messages:[
        {id:v1(), message:'Hi'},
        {id:v1(), message:'Bro'},
        {id:v1(), message:'Buy'},
        {id:v1(), message:'Ear'},
        {id:v1(), message:'Pop'}
    ]
}

const dialogReducer = (state: DialogPageType = initialState, action: ActionType):DialogPageType  => {
    switch(action.type){
        case "ADD-MES":
            const newMes = {id: v1(), message: action.message};
            return {...state, messages:[...state.messages, newMes]}
        default: return state
    }
    
    
}

export const addMessageActionCreator = (value: string):addMessageActionCreatorType => {
    return {
        type: "ADD-MES",
        message: value
    }
}

export default dialogReducer;