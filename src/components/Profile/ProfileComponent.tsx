import React, {Component} from "react";
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../redux/store";
import * as axios from "axios";
import {ProfileType} from "../../redux/profileReducer";


export interface ProfileComponentType  {
    posts: Array<PostType>
    AddTask: (value:string) => void
    profile?: ProfileType
    SetUserProfile: (profile: ProfileType) => void
}

export default  class  ProfileComponent extends Component<ProfileComponentType, any>{

    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
            .then((response:any) => {

                this.props.SetUserProfile(response.data)
            })
    }

    render() {
        console.log(this.props.profile)
        return (
            <div className={classes.content}>
                <div className={classes.content_header_img}>
                    <img alt='ava' src='https://million-wallpapers.ru/wallpapers/0/54/492930442420488/vse-zelenye.jpg'/>
                </div>
                <MyPosts

                    {...this.props}
                />
            </div>
        )
    }

}
