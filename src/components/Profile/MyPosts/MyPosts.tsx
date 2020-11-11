import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import Posts from "./Post/Posts";
import {PostType} from '../../../redux/state'
import style from './MyPosts.module.css';
type MyPostsType = {
    posts:Array<PostType>
    addPost: (value:string ) => void
}
const MyPosts = (props:MyPostsType) => {
    const [value, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null)



    const callBackAddTask = () => {
        if (value.trim() !== ''){
            props.addPost(value);

        } else {
            setError('Title is required')
        }
        setTitle('');
    }
    const onTitleChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    const onTitleKeyHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter"){
            callBackAddTask();
        }

    }
    return (
        <div className={style.content}>


            <div className={style.head}>
                <div className={style.post}>
                    <span className={style.title}>My post</span>
                    <div className={style.input + " input-group mb-3"}>
                        <input
                            type="text" className="form-control"
                            value={value}
                            onChange={ onTitleChangeHandler }
                            onKeyDown={ onTitleKeyHandler }
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button
                                className="btn btn-success"
                                onClick={callBackAddTask}>Add Post
                            </button>

                        </div>

                    </div>
                    {error && <div className={style.error}>{error}</div>}
            </div>

            </div>
            <Posts posts={props.posts}/>
        </div>
    )
}
export default MyPosts;