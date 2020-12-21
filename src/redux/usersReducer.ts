
// type ActionType = {
//     type: string
//     [key: string]: any
// }
export enum ACTION_TYPE {
    FOLLOW='SOC/FOLLOW',
    UNFOLLOW='SOC/UNFOLLOW',
    SET_USERS = 'SOC/SET_USERS',
    SET_TOTAL_COUNT = 'SOC/SET_TOTAL_COUNT',
    SET_CURRENT_PAGE = 'SOC/SET_CURRENT_PAGE'
}

export type usersACTypes =
    ReturnType<typeof unFollowAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setCurrentPageAC>



type FollowUsersACType = {
    type: ACTION_TYPE.FOLLOW
    userId:number
}
type UnFollowUsersACType = {
    type: ACTION_TYPE.UNFOLLOW
    userId:number
}
type SetUsersACType = {
    type: ACTION_TYPE.SET_USERS
    users:Array<UsersType>
}
type SetTotalCountACType = {
    type: ACTION_TYPE.SET_TOTAL_COUNT
    totalCount:number
}
type SetCurrentPageACType = {
    type: ACTION_TYPE.SET_CURRENT_PAGE
    currentPage:number
}

const initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 36,
    currentPage: 1
}

export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type UsersType ={
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
        city:string
        country:string
    }
}


const usersReducer = (state:UsersPageType  = initialState, action: usersACTypes):UsersPageType => {

    switch(action.type){
        case ACTION_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id !== action.userId
                ? user
                : {...user, followed:true})
            }
        case ACTION_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id !== action.userId
                    ? user
                    : {...user, followed:false})
            }
        case ACTION_TYPE.SET_USERS:
            return {...state, users: [...action.users]}
        case ACTION_TYPE.SET_TOTAL_COUNT:
            return {...state, totalUsersCount:action.totalCount}
        case ACTION_TYPE.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        default: return state
    }

}
export const followAC = (userId:number):FollowUsersACType => ({type:ACTION_TYPE.FOLLOW, userId})
export const unFollowAC = (userId:number):UnFollowUsersACType => ({type:ACTION_TYPE.UNFOLLOW, userId})
export const setUsersAC = (users:Array<UsersType>):SetUsersACType => ({type:ACTION_TYPE.SET_USERS, users})
export const setTotalCountAC  = (totalCount: number):SetTotalCountACType => ({type:ACTION_TYPE.SET_TOTAL_COUNT, totalCount})
export const setCurrentPageAC  = (currentPage: number):SetCurrentPageACType => ({type:ACTION_TYPE.SET_CURRENT_PAGE, currentPage})
export default usersReducer;