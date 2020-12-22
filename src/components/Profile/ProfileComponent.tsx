import React, {Component} from "react";
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../redux/store";
import * as axios from "axios";
import {ProfileType} from "../../redux/profileReducer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RouteComponentProps} from "react-router";


export interface ProfileComponentType extends RouteComponentProps<MatchParams> {
    posts: Array<PostType>
    AddTask: (value:string) => void
    profile?: ProfileType
    SetUserProfile: (profile: ProfileType) => void
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
        axios.default.get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
            .then((response:any) => {

                this.props.SetUserProfile(response.data)
            })
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
