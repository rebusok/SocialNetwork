import React from "react";
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../redux/state";

type ProfileProspType = {
    posts:Array<PostType>
    addPost: (value:string) => void
}


const ProfileComponent= ({ posts, addPost }:ProfileProspType) => {

    return (
        <div className={classes.content}>
            <div className={classes.content_header_img}>
                <img alt='ava' src='https://million-wallpapers.ru/wallpapers/0/54/492930442420488/vse-zelenye.jpg'/>
            </div>
            <MyPosts
                posts={posts}
                addPost={addPost}/>
        </div>
    )
}
export default ProfileComponent;