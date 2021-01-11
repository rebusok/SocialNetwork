import ProfileComponent from "./ProfileComponent";
import {connect} from "react-redux";
import {
    AddTask,
    setProfileStatusThunk,
    SetUserProfileThunk,
    updateProfileStatusThunk
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {withRouter} from "react-router";
import {compose} from "redux";
import React from "react";

const mapStateToProps = (state:AppStateType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
export default compose(
    connect(mapStateToProps, {
        AddTask,
        SetUserProfileThunk,
        setProfileStatusThunk,
        updateProfileStatusThunk
    }),
    withRouter,
    // RedirectHoc
)(ProfileComponent) as React.FunctionComponent<any>

