import React from "react";
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import StoreContext from "../../StoreContext";


const ProfileComponent= () => {

    return (
        <div className={classes.content}>
            <div className={classes.content_header_img}>
                <img alt='ava' src='https://million-wallpapers.ru/wallpapers/0/54/492930442420488/vse-zelenye.jpg'/>
            </div>

            <StoreContext.Consumer>
                {
                (store) => {
                    return (
                        <MyPosts
                            posts={store.getState().profileReducer.posts}
                            dispatch={store.dispatch}
                        />
                    )
                }
            }

            </StoreContext.Consumer>
        </div>
    )
}
export default ProfileComponent;