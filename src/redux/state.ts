
import {v1} from "uuid";

export type ActionType = {
    type : "ADD-POST" | "ADD-MES";
    post?: string
    message?: string
}
export type MessageType = {
    id: string;
    message: string | undefined
}
export type DialogType = {
    id: string;
    name: string
}
export type PostType = {
    id: string;
    message:string | undefined
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>


}
export type DialogPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}
type SidebarType = {}
export type RootStateType = {
    profilePage:ProfilePageType;
    dialogPage:DialogPageType
    sidebar:SidebarType
}
export type RootStoreType = {
    _state: RootStateType
    rerenderEntireTree: () => void       
    getState: () => RootStateType
    dispatch: (action:ActionType) =>  any
}
const store:RootStoreType = {
    _state:{
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how you', likeCount: 2},
                {id: v1(), message: 'Bro learn React', likeCount: 5},
                {id: v1(), message: 'Blooo', likeCount: 1},
                {id: v1(), message: 'Learn run', likeCount: 14}
            ]
        },
        dialogPage:{
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
        },
        sidebar:{}
    },
    getState(){
        return this._state;
    },
    rerenderEntireTree(){
        console.log('State change')
    },


    dispatch(action) {
        
        switch(action.type){
            case "ADD-POST":
                
                const newPost = {id: v1(), message: action.post, likeCount: 0};
                this._state.profilePage.posts.push(newPost)
                return this._state.profilePage.posts 
            case "ADD-MES":
        
                const newMes = {id: v1(), message: action.message};
                this._state.dialogPage.messages.push(newMes)
                return this._state.dialogPage.messages
        }
        

    }
}

const addPostActionCreator = (value:string) => {
    return {
        type: "ADD-POST",
        post: value
    }
}
const addMessageActionCreator = (value: string) => {
    return {
        type: "ADD-MES",
        message: value
    }
}

export {
    addPostActionCreator,
    addMessageActionCreator
}


export default store;