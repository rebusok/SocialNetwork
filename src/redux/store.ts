import {ActionType} from "./dialogReducer";


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
    newPostText: string

}
export type DialogPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
    newMessageBody?: string
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
// const store:RootStoreType = {
//     _state:{
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Hi, how you', likeCount: 2},
//                 {id: v1(), message: 'Bro learn React', likeCount: 5},
//                 {id: v1(), message: 'Blooo', likeCount: 1},
//                 {id: v1(), message: 'Learn run', likeCount: 14}
//             ],
//             newPostText: 'hello'
//         },
//         dialogPage:{
//             dialogs:[
//                 {id:v1(), name:'Yuri'},
//                 {id:v1(), name:'Grish'},
//                 {id:v1(), name:'Masha'},
//                 {id:v1(), name:'Petro'},
//                 {id:v1(), name:'dds'},
//                 {id:v1(), name:'Ula'}
//             ],
//             messages:[
//                 {id:v1(), message:'Hi'},
//                 {id:v1(), message:'Bro'},
//                 {id:v1(), message:'Buy'},
//                 {id:v1(), message:'Ear'},
//                 {id:v1(), message:'Pop'}
//             ],
//             newMessageBody: ''
//         },
//         sidebar:{}
//     },
//     getState(){
//         return this._state;
//     },
//     rerenderEntireTree(){
//         console.log('State change')
//     },


//     dispatch(action) {        
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogPage = dialogReducer(this._state.dialogPage, action)       

//     }
// }


// export default store;