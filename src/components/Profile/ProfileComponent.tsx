import React, {Component} from "react";
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RouteComponentProps} from "react-router";
import {PropsProfileFromRedux} from "./ProfileComponentContainer";


export interface ProfileComponentType extends   PropsProfileFromRedux, RouteComponentProps<MatchParams>{
}

interface MatchParams {
    userId: string
}

export default class ProfileComponent extends Component<ProfileComponentType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            if (this.props.isAuth.data.id) {
                userId = this.props.isAuth.data.id.toString();
            } else  {
                userId = '13024';
            }
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
