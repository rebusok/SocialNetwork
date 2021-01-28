import ProfileComponent from "./ProfileComponent";
import {connect, ConnectedProps} from "react-redux";
import {
    AddTask,
    setProfileStatusThunk,
    SetUserProfileThunk,
    updateProfileStatusThunk
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {withRouter} from "react-router";
import {compose} from "redux";
import  {ComponentType} from "react";

const mapStateToProps = (state:AppStateType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth,
        loading: state.profilePage.loading
    }
}
export type PropsProfileFromRedux = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {
    AddTask,
    SetUserProfileThunk,
    setProfileStatusThunk,
    updateProfileStatusThunk
})

export default compose<ComponentType>(
    connector,
    withRouter,
    // RedirectHoc
)(ProfileComponent)

