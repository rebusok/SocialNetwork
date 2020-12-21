
import {connect} from "react-redux";

import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC, UsersType} from "../../redux/usersReducer";
import UsersC from "./UsersС";

const mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setTotalCount: (totalCount:number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage: (currentPage:number) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;