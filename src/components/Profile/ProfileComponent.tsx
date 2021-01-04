import React, {Component} from "react";
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../redux/store";
import {ProfileType} from "../../redux/profileReducer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RouteComponentProps} from "react-router";


export interface ProfileComponentType extends RouteComponentProps<MatchParams> {
    posts: Array<PostType>
    AddTask: (value:string) => void
    profile?: ProfileType
    SetUserProfileThunk: (userId:string) => void
}
interface MatchParams {
    userId: string;
}

export default  class  ProfileComponent extends Component<ProfileComponentType, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.SetUserProfileThunk(userId)
    }

    render() {
        return (
            <div className={classes.content}>
                <ProfileInfo
                    profile={this.props.profile}/>
                <MyPosts

                    {...this.props}
                />
            </div>
        )
    }

}
