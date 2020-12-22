import {connect} from "react-redux";

import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleLoading,
    unFollow,
    UsersType
} from "../../redux/usersReducer";

import React, {Component} from "react";
import * as axios from "axios";
import Users from "./Users";
import Spinner from "../UI/Loader/Spinner/Spinner";
import {AppStateType} from "../../redux/reduxStore";


interface usersPagesType {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalCount: (totalCount: number) => void
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    loading: boolean
    toggleLoading: (loading: boolean) => void
}

class UsersAPIComponent extends Component<usersPagesType, any> {

    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res: any) => {
            this.props.setUsers(res.data.items)
            this.props.toggleLoading(false)
            // this.props.setTotalCount(res.data.totalCount)
            console.log(res.data)
        })
    }

    onPageChanged = (pageNum: number) => {
        this.props.setCurrentPage(pageNum)
        this.props.toggleLoading(true)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
                this.props.toggleLoading(false)
            })
        console.log(pageNum)
    }

    render() {
        const {users, totalUsersCount, pageSize, currentPage, follow, unFollow, loading} = this.props
        return <>
            {loading ? <Spinner/> : <Users
                users={users}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                follow={follow}
                unFollow={unFollow}
                onPageChanged={this.onPageChanged}

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
        loading: state.usersPage.loading
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleLoading
})(UsersAPIComponent);