import React, {useState} from "react";
import Posts from "./Post/Posts";
import style from './MyPosts.module.css';
import {ProfileComponentType} from "../ProfileComponent";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField, maxLength} from "../../../utils/Validators/Validator";
import {TextAreaFom} from "../../common/FormControls/FormContrrols";


const maxLengthVal = maxLength(10);

interface MyPostsType extends ProfileComponentType  {


}
type FormDataTypePost = {
    myPosts:string
}
const MyPosts = React.memo((props:MyPostsType) => {
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
})

const MyPostsForm:React.FC<InjectedFormProps<FormDataTypePost>> = (props) => {
    return (
        <form className={style.input + " input-group mb-3"} onSubmit={props.handleSubmit}>
            <Field
                type="text" className="form-control"
                name={'myPosts'}
                component={TextAreaFom}
                validate={[requiredField, maxLengthVal]}
                placeholder={'test'}
            />
            <div className="input-group-append d-flex">
                <button
                    className={'btn btn-success ' + style.btnForm}
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