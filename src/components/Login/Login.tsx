import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name="login"
                        type="text" component={'input'} placeholder="Username"/></div>
            <div><Field component={'input'} placeholder={'Password'} name="password"/></div>
            <div><Field type="checkbox" component={'input'} name={'rememberMe'}/> remember My</div>
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
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}


export default Login;