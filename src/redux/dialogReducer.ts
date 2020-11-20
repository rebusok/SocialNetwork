import {MessageType , ActionType} from './state';
import {v1} from "uuid";
const dialogReducer = (state: Array<MessageType>, action: ActionType) => {
    switch(action.type){
         
        case "ADD-MES":
            
            const newMes = {id: v1(), message: action.message};
            state.push(newMes)
            return state
    }
    
}


export default dialogReducer;