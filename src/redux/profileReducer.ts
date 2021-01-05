import {v1} from "uuid";
import API from "../API/API";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";



export enum ACTION_TYPE {
    ADD_POST = 'SOC/PROFILE/ADD_POST',
    SET_USER = 'SOC/PROFILE/SET_USER'

}

export type ProfileACTypes =
    ReturnType<typeof AddTask>
    | ReturnType<typeof SetUserProfile>

type addPostType = {
    type: ACTION_TYPE.ADD_POST
    value: string
}
type setUserProfile = {
    type: ACTION_TYPE.SET_USER
    profile: ProfileType
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website?: string
        vk: string
        twitter: string
        instagram: string
        youtube?: string
        github: string
        mainLink?: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small?: string
        large?: string
    }
}
const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how you', likeCount: 2},
        {id: v1(), message: 'Bro learn React', likeCount: 5},
        {id: v1(), message: 'Blooo', likeCount: 1},
        {id: v1(), message: 'Learn run', likeCount: 14}
    ],
    newPostText: 'hello',
}
type PostType = {
    id: string
    message: string
    likeCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile?: ProfileType
}
type ThunkTypesProfile  = ThunkAction<void, AppStateType, unknown, ProfileACTypes>
const profileReducer = (state: ProfilePageType = initialState, action: ProfileACTypes): ProfilePageType => {

    switch (action.type) {
        case ACTION_TYPE.ADD_POST:
            const newPost = {id: v1(), message: action.value, likeCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case ACTION_TYPE.SET_USER:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }

}

export const AddTask = (value: string): addPostType => ({type: ACTION_TYPE.ADD_POST, value})
export const SetUserProfile = (profile: ProfileType): setUserProfile => ({type: ACTION_TYPE.SET_USER, profile})

export const SetUserProfileThunk = (userId: string):ThunkTypesProfile => (dispatch) => {

    API.setUsersProfile(userId).then(res => {
        console.log(res)
        dispatch(SetUserProfile(res))
    })
}
export default profileReducer;