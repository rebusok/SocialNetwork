
type ActionType = {
    type: string
    [key: string]: any
}

type FollowUsersACType = {
    type: "FOLLOW"
    userId:string
}
type UnFollowUsersACType = {
    type: "UNFOLLOW"
    userId:string
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
    id:string
    followed: boolean
    fullName: string
    status: string
    usersPhotoUrl: string
    location: {city:string, country:string}
}


const usersReducer = (state:UsersPageType  = initialState, action: ActionType):UsersPageType => {

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
export const followAC = (userId:string):FollowUsersACType => ({type:"FOLLOW", userId})
export const unFollowAC = (userId:string):UnFollowUsersACType => ({type:"UNFOLLOW", userId})
export const setUsersAC = (users:Array<UsersType>):SetUsersACType => ({type:"SET_USERS", users})

export default usersReducer;