
import {v1} from "uuid";

export type MessageType = {
    id: string;
    message: string
}
export type DialogType = {
    id: string;
    name: string
}
export type PostType = {
    id: string;
    message:string;
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

let state:RootStateType = {
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
}



export default state;