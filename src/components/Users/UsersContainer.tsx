import {connect} from "react-redux";

import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, toggleFollowProgress,
    toggleLoading,
    unFollow,
    UsersType
} from "../../redux/usersReducer";

import React, {Component} from "react";

import Users, {usersPagesType} from "./Users";
import Spinner from "../UI/Loader/Spinner/Spinner";
import {AppStateType} from "../../redux/reduxStore";
import API from "../../API/API";


interface usersPagesContainerType extends usersPagesType {
    setUsers: (users: Array<UsersType>) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void

    toggleLoading: (loading: boolean) => void
}

class UsersAPIComponent extends Component<usersPagesContainerType, any> {

    componentDidMount() {
        API.getUsers(this.props.currentPage, this.props.pageSize)
            .then((res: any) => {
                this.props.setUsers(res.items)
                this.props.toggleLoading(false)
                // this.props.setTotalCount(res.data.totalCount)

            })
    }

    onPageChanged = (pageNum: number) => {
        this.props.setCurrentPage(pageNum)
        this.props.toggleLoading(true)
        API.onPageChanged(pageNum, this.props.pageSize)
            .then((response: any) => {
                this.props.setUsers(response.items)
                this.props.toggleLoading(false)
            })

    }

    render() {
        const {
            users,
            totalUsersCount,
            pageSize,
            currentPage,
            follow,
            unFollow,
            loading,
            followIsProgress,
            toggleFollowProgress
        } = this.props
        return <>
            {loading ? <Spinner/> : <Users
                users={users}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                follow={follow}
                unFollow={unFollow}
                onPageChanged={this.onPageChanged}
                followIsProgress={followIsProgress}
                toggleFollowProgress={toggleFollowProgress}
                loading={loading}
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
    follow,
    unFollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleLoading,
    toggleFollowProgress
})(UsersAPIComponent);