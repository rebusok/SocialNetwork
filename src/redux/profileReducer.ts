import {ProfilePageType } from './store';
import {v1} from "uuid";

type ActionType = {
    type : "ADD-POST" | "ADD-MES";
    post?: string
    message?: string
}
const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how you', likeCount: 2},
        {id: v1(), message: 'Bro learn React', likeCount: 5},
        {id: v1(), message: 'Blooo', likeCount: 1},
        {id: v1(), message: 'Learn run', likeCount: 14}
    ],
    newPostText: 'hello'
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType):ProfilePageType => {
    
    switch(action.type){
        case "ADD-POST":
            
            const newPost = {id: v1(), message: action.post, likeCount: 0};
            state.posts.push(newPost)
            return state 
        default: return state
    }
   
}
export const addPostActionCreator = (value:string) => {
    return {
        type: "ADD-POST",
        post: value
    }
}

export default profileReducer;