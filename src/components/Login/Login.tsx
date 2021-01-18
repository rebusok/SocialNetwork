import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormContrrols";
import {requiredField} from "../../utils/Validators/Validator";
import {useDispatch, useSelector} from "react-redux";
import {LoginRe} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Redirect} from "react-router";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error?: any
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name="email"
                        type="text" component={Input} placeholder="Username" validate={[requiredField]}/></div>
            <div><Field component={Input} placeholder={'Password'} name="password" validate={[requiredField]}/></div>
            <div><Field type="checkbox" component={Input} name={'rememberMe'}/> remember My</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {
    const {auth: {isAuth}} = useSelector((state: AppStateType) => state)

    const dispatch = useDispatch()
    const onSubmit = (formData: FormDataType) => {
        dispatch(LoginRe(formData.email, formData.password, formData.rememberMe))

    }
    if (isAuth) return <Redirect to={'/profile'}/>
    return (

        <div>

            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}


export default Login;