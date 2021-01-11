import React, {useState} from "react";
import Posts from "./Post/Posts";
import style from './MyPosts.module.css';
import {ProfileComponentType} from "../ProfileComponent";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

interface MyPostsType extends ProfileComponentType  {


}
type FormDataTypePost = {
    myPosts:string
}
const MyPosts = (props:MyPostsType) => {
    const [error, setError] = useState<string | null>(null)


    const callBackAddTask = ({myPosts = ''}:FormDataTypePost) => {

        if (myPosts.trim() !== ''){
            props.AddTask(myPosts)
            setError(null)
        } else {
            setError('Title is required')
        }

    }


    return (
        <div className={style.content}>
            <div className={style.head}>
                <div className={style.post}>
                    <span className={style.title}>My post</span>
                    <MyPostsFormRedux onSubmit={callBackAddTask} />
                    {error && <div className={style.error}>{error}</div>}
            </div>
            </div>
            <Posts posts={props.posts}/>
        </div>
    )
}

const MyPostsForm:React.FC<InjectedFormProps<FormDataTypePost>> = (props) => {
    console.log(props)
    return (

        <form className={style.input + " input-group mb-3"} onSubmit={props.handleSubmit}>
            <Field
                type="text" className="form-control"
                name={'myPosts'}
                component={'textarea'}

            />
            <div className="input-group-append">
                <button
                    className="btn btn-success"
                    >Add Post
                </button>

            </div>

        </form>

    )
}
const MyPostsFormRedux = reduxForm<FormDataTypePost>({
    form: 'myPosts'
})(MyPostsForm)
export default MyPosts;