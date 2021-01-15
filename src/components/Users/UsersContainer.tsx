import {connect, ConnectedProps} from "react-redux";
import {followThunk, getUsersThunkCreator, unFollowThunk,} from "../../redux/usersReducer";
import React, {Component, ComponentType} from "react";
import Users from "./Users";
import Spinner from "../UI/Loader/Spinner/Spinner";
import {AppStateType} from "../../redux/reduxStore";
import RedirectHoc from "../../HOC/RedirectHoc";
import {compose} from "redux";


interface usersPagesContainerType extends PropsUserFromRedux {
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
                {...this.props}
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
export type PropsUserFromRedux = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {
    followThunk,
    unFollowThunk,
    getUsers:getUsersThunkCreator
})

export default compose<ComponentType>(
    connector,
    RedirectHoc
)(UsersAPIComponent)