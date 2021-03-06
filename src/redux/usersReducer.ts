import API from "../API/API";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

export enum ACTION_TYPE {
    FOLLOW = 'SOC/FOLLOW',
    UNFOLLOW = 'SOC/UNFOLLOW',
    SET_USERS = 'SOC/SET_USERS',
    SET_TOTAL_COUNT = 'SOC/SET_TOTAL_COUNT',
    SET_CURRENT_PAGE = 'SOC/SET_CURRENT_PAGE',
    TOGGLE_LOADING = 'SOC/TOGGLE_LOADING',
    TOGGLE_FOLLOW_PROGRESS = 'SOC/TOGGLE_FOLLOW_PROGRESS'
}

export type usersACTypes =
    ReturnType<typeof unFollow>
    | ReturnType<typeof follow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof toggleLoading>
    | ReturnType<typeof toggleFollowProgress>


type FollowUsersACType = {
    type: ACTION_TYPE.FOLLOW
    userId: number
}
type UnFollowUsersACType = {
    type: ACTION_TYPE.UNFOLLOW
    userId: number
}
type SetUsersACType = {
    type: ACTION_TYPE.SET_USERS
    users: Array<UsersType>
}
type SetTotalCountACType = {
    type: ACTION_TYPE.SET_TOTAL_COUNT
    totalCount: number
}
type SetCurrentPageACType = {
    type: ACTION_TYPE.SET_CURRENT_PAGE
    currentPage: number
}
type ToggleLoadingACType = {
    type: ACTION_TYPE.TOGGLE_LOADING
    loading: boolean
}
type ToggleFollowProgressACType = {
    type: ACTION_TYPE.TOGGLE_FOLLOW_PROGRESS

    userId:number
    loading: boolean
}

const initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 50,
    currentPage: 1,
    loading: true,
    followIsProgress: []
}

export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    loading: boolean
    followIsProgress: Array<number>
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName?: string
    photos: {
        small?: string
        large?: string
    }
    status: string
    "followed": boolean
    location: {
        city: string
        country: string
    }
}


const usersReducer = (state: UsersPageType = initialState, action: usersACTypes): UsersPageType => {

    switch (action.type) {
        case ACTION_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id !== action.userId
                    ? user
                    : {...user, followed: true})
            }
        case ACTION_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id !== action.userId
                    ? user
                    : {...user, followed: false})
            }
        case ACTION_TYPE.SET_USERS:
            return {...state, users: [...action.users]}
        case ACTION_TYPE.SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case ACTION_TYPE.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case ACTION_TYPE.TOGGLE_LOADING:
            return {...state, loading: action.loading}
        case ACTION_TYPE.TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                followIsProgress: action.loading
                    ? [...state.followIsProgress, action.userId]
                    : state.followIsProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }

}
export const follow = (userId: number): FollowUsersACType => ({type: ACTION_TYPE.FOLLOW, userId})
export const unFollow = (userId: number): UnFollowUsersACType => ({type: ACTION_TYPE.UNFOLLOW, userId})
export const setUsers = (users: Array<UsersType>): SetUsersACType => ({type: ACTION_TYPE.SET_USERS, users})
export const setTotalCount = (totalCount: number): SetTotalCountACType => ({
    type: ACTION_TYPE.SET_TOTAL_COUNT,
    totalCount
})
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({
    type: ACTION_TYPE.SET_CURRENT_PAGE,
    currentPage
})
export const toggleLoading = (loading: boolean): ToggleLoadingACType => ({type: ACTION_TYPE.TOGGLE_LOADING, loading})
export const toggleFollowProgress = (userId:number, loading:boolean): ToggleFollowProgressACType => ({
    type: ACTION_TYPE.TOGGLE_FOLLOW_PROGRESS,
    userId,
    loading
})

type ThunkTypesUser  = ThunkAction<void, AppStateType, unknown, usersACTypes>
 export const getUsersThunkCreator = (pageSize:number, currentPage:number):ThunkTypesUser => (dispatch) => {
     dispatch(toggleLoading(true))
     dispatch(setCurrentPage(currentPage))

    API.getUsers(currentPage, pageSize)
        .then((res: any) => {
            dispatch(setUsers(res.items))
            dispatch(toggleLoading(false))
            // this.props.setTotalCount(res.data.totalCount)

        })
}

export const followThunk = (userId:number):ThunkTypesUser => (dispatch) => {
    dispatch(toggleFollowProgress(userId, true))
    API.Follow(userId, {})
        .then((res: any) => {
            if(res.resultCode === 0){
                dispatch(follow(userId))
                dispatch(toggleFollowProgress( userId, false))
            }

        })
}
export const unFollowThunk = (userId:number):ThunkTypesUser => (dispatch) => {
    dispatch(toggleFollowProgress( userId, true))
    API.Unfollow(userId)
        .then((res:any) => {
            if(res.resultCode === 0){
                dispatch(unFollow(userId))
                dispatch(toggleFollowProgress(userId, false))
            }
        })
}



export default usersReducer;