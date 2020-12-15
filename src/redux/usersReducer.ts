
// type ActionType = {
//     type: string
//     [key: string]: any
// }
export type usersACTypes =
    ReturnType<typeof unFollowAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setUsersAC>



type FollowUsersACType = {
    type: "FOLLOW"
    userId:number
}
type UnFollowUsersACType = {
    type: "UNFOLLOW"
    userId:number
}
type SetUsersACType = {
    type: "SET_USERS"
    users:Array<UsersType>
}

const initialState = {
    users: []
}

export type UsersPageType = {
    users: Array<UsersType>
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
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id !== action.userId
                ? user
                : {...user, followed:true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id !== action.userId
                    ? user
                    : {...user, followed:false})
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default: return state
    }

}
export const followAC = (userId:number):FollowUsersACType => ({type:"FOLLOW", userId})
export const unFollowAC = (userId:number):UnFollowUsersACType => ({type:"UNFOLLOW", userId})
export const setUsersAC = (users:Array<UsersType>):SetUsersACType => ({type:"SET_USERS", users})

export default usersReducer;