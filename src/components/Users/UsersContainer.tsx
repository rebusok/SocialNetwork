
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/usersReducer";

const mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId:string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId:string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;