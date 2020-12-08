import ProfileComponent from "./ProfileComponent";
import {addPostActionCreator} from "../../redux/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state:any) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        callBackAddTask: (value:any) => {
            if (value.trim() !== ''){
                dispatch(addPostActionCreator(value));
            }

        }
    }
}
const ProfileComponentContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)
export default ProfileComponentContainer;
