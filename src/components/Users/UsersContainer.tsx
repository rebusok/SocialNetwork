import {connect} from "react-redux";
import {
    followThunk, getUsersThunkCreator,
     unFollowThunk,
} from "../../redux/usersReducer";
import React, {Component} from "react";
import Users, {usersPagesType} from "./Users";
import Spinner from "../UI/Loader/Spinner/Spinner";
import {AppStateType} from "../../redux/reduxStore";



interface usersPagesContainerType extends usersPagesType {
    getUsers: (pageSize: number, currentPage: number) => void
}

class UsersAPIComponent extends Component<usersPagesContainerType, any> {

    componentDidMount() {
        const {getUsers, pageSize, currentPage} = this.props
        getUsers( pageSize, currentPage)
    }

    onPageChanged = (pageNum: number) => {
        const {getUsers, pageSize} = this.props

        getUsers( pageSize, pageNum)
    }

    render() {
        const {
            users,
            totalUsersCount,
            pageSize,
            currentPage,
            loading,
            followIsProgress,

            followThunk,
            unFollowThunk
        } = this.props
        return <>
            {loading ? <Spinner/> : <Users
                users={users}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={this.onPageChanged}
                followIsProgress={followIsProgress}
                loading={loading}
                unFollowThunk={unFollowThunk}
                followThunk={followThunk}
            />}

        </>

    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        loading: state.usersPage.loading,
        followIsProgress: state.usersPage.followIsProgress
    }
}


export default connect(mapStateToProps, {
    followThunk,
    unFollowThunk,
    getUsers:getUsersThunkCreator
})(UsersAPIComponent);