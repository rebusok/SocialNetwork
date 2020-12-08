import {DialogPageType , ActionType} from './store';
import {v1} from "uuid";

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
    ],
    newMessageBody: ''
}

const dialogReducer = (state: DialogPageType = initialState, action: ActionType):DialogPageType  => {
    switch(action.type){
        case "ADD-MES":
            const newMes = {id: v1(), message: action.message};
            console.log(state)
            return {...state, messages:[...state.messages, newMes]}
        default: return state
    }
    
    
}

export const addMessageActionCreator = (value: string) => {
    return {
        type: "ADD-MES",
        message: value
    }
}

export default dialogReducer;