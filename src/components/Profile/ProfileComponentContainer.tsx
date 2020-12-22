import ProfileComponent from "./ProfileComponent";

import {connect} from "react-redux";
import {AddTask, SetUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/reduxStore";


const mapStateToProps = (state:AppStateType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}



export default connect(mapStateToProps, {
    AddTask,
    SetUserProfile
})(ProfileComponent);
