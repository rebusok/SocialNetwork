import React, {Component} from "react";
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../redux/store";
import {ProfileType} from "../../redux/profileReducer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { RouteComponentProps} from "react-router";


export interface ProfileComponentType extends RouteComponentProps<MatchParams> {
    posts: Array<PostType>
    AddTask: (value: string) => void
    profile?: ProfileType
    SetUserProfileThunk: (userId: string) => void
    setProfileStatusThunk: (userId: string) => void
    updateProfileStatusThunk: (status:string) => void
    status:string
}

interface MatchParams {
    userId: string
}

export default class ProfileComponent extends Component<ProfileComponentType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '13024';
        }
        this.props.SetUserProfileThunk(userId)
        this.props.setProfileStatusThunk(userId)

    }

    render() {

            return (
                <div className={classes.content}>
                    <ProfileInfo
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus = {this.props.updateProfileStatusThunk}
                        />
                    <MyPosts

                        {...this.props}
                    />
                </div>
            )


    }

}
