import {PostType , ActionType} from './state';
import {v1} from "uuid";




const profileReducer = (state: Array<PostType>, action: ActionType) => {
    
    switch(action.type){
        case "ADD-POST":
            
            const newPost = {id: v1(), message: action.post, likeCount: 0};
            state.push(newPost)
            return state 
    }
}

export default profileReducer;