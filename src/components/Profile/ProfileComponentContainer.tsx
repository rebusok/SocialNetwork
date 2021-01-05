import ProfileComponent from "./ProfileComponent";

import {connect} from "react-redux";
import {AddTask, SetUserProfileThunk} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";
import {withRouter} from "react-router";


const mapStateToProps = (state:AppStateType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {
    AddTask,
    SetUserProfileThunk
})(withRouter(ProfileComponent));
