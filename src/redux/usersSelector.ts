

import {AppStateType} from "./reduxStore";
import {createSelector} from "reselect";

export const getUsers = (state:AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage
}
export const getLoading = (state:AppStateType) => {
    return state.usersPage.loading
}
export const getFollowIsProgress= (state:AppStateType) => {
    return state.usersPage.followIsProgress
}

export const getUserSuper = createSelector(getUsers,  (users) => {

    return users.filter(u => true)
})
