import {v1} from "uuid";
import {ProfileAPI} from "../API/API";
import {AppThunk} from "./reduxStore";


export enum ACTION_TYPE {
    ADD_POST = 'SOC/PROFILE/ADD_POST',
    SET_USER = 'SOC/PROFILE/SET_USER',
    SET_PROFILE_STATUS = 'SET_PROFILE_STATUS',
    SET_PROFILE_LOADING= 'SET_PROFILE_LOADING',
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
    profile: undefined,
    newPostText: 'hello',
    status: '',
    loading: false
}
type PostType = {
    id: string
    message: string
    likeCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | undefined
    status: string
    loading: boolean
}

const profileReducer = (state: ProfilePageType = initialState, action: any): ProfilePageType => {
    console.log(action)
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
        case ACTION_TYPE.SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case ACTION_TYPE.SET_PROFILE_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }

}

export const AddTask = (value: string) => ({type: ACTION_TYPE.ADD_POST, value})
export const SetUserProfile = (profile: ProfileType) => ({type: ACTION_TYPE.SET_USER, profile})
export const SetProfileStatus = (status: string) => ({type:ACTION_TYPE.SET_PROFILE_STATUS, status})
export const setProfileLoading = (loading:boolean) => ({type:ACTION_TYPE.SET_PROFILE_LOADING, loading})

export type ProfileACTypes =
    ReturnType<typeof AddTask>
    | ReturnType<typeof SetUserProfile>
    | ReturnType<typeof SetProfileStatus>
    | ReturnType<typeof setProfileLoading>




export const SetUserProfileThunk = (userId: string):AppThunk => (dispatch) => {
    dispatch(setProfileLoading(true))
    ProfileAPI.setUsersProfile(userId).then(res => {
        console.log(res)
        dispatch(setProfileLoading(false))
        dispatch(SetUserProfile(res))
    })
}

export  const setProfileStatusThunk = (userId: string):AppThunk => (dispatch) => {
    dispatch(setProfileLoading(true))
    ProfileAPI.getStatus(userId).then(res => {
        console.log(res)
        dispatch(SetProfileStatus(res.data))
        dispatch(setProfileLoading(false))
    })
}
export  const updateProfileStatusThunk = (status: string):AppThunk => (dispatch) => {
    dispatch(setProfileLoading(true))
    ProfileAPI.updateStatus(status).then(res => {
        if(res.data.resultCode === 0 ) {
            dispatch(setProfileLoading(false))
            dispatch(SetProfileStatus(status))
        }
    })
}


export default profileReducer;