import React from "react";
import classes from './Posts.module.css'

import {ProfilePageType} from '../../../../redux/state'




const Posts:React.FC<ProfilePageType> = (props) => {
    
    const postVie = props.posts.map(({message, likeCount, id}) => {
        return (
            <div key={id}>
                <div className={classes.item}>
                    <img alt='ava' src='https://million-wallpapers.ru/wallpapers/5/51/424703866779568/nejtiri-2017-avatara-2.jpg'/>
                    <span className={classes.message}>{message}</span>
                </div>
                <div>
                    <span> {likeCount} like </span>
                </div>
            </div>
        )
    })

    return (
        <div>
            {postVie}
        </div>
    )
}
export default Posts;