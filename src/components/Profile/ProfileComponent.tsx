import React from "react";
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../redux/store";


type ProfileComponentType = {
    posts: Array<PostType>
    callBackAddTask: (value:string) => void
}

const ProfileComponent= (props:ProfileComponentType) => {
    return (
        <div className={classes.content}>
            <div className={classes.content_header_img}>
                <img alt='ava' src='https://million-wallpapers.ru/wallpapers/0/54/492930442420488/vse-zelenye.jpg'/>
            </div>
            <MyPosts

                posts={props.posts}
                callBackAddTask={props.callBackAddTask}
            />
        </div>
    )
}
export default ProfileComponent;