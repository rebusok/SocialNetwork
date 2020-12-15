
import {connect} from "react-redux";

import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/usersReducer";
import UsersC from "./UsersС";

const mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId:number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;