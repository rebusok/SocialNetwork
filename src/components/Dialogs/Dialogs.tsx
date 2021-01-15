import React from "react";
import s from './Dialogs.module.css';
import UsersDialog from "./usersDialog/UsersDialog";
import ChatMessage from "./ChatMessage/ChatMessage";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextAreaFom} from "../common/FormControls/FormContrrols";
import {maxLength, requiredField} from "../../utils/Validators/Validator";
import {PropsDialogsFromRedux} from "./DialogsContainer";

type FormDataTypeDia = {
    dialogs: string
}

const InputVAl = maxLength(10);
const Dialogs = (props: PropsDialogsFromRedux) => {

    const callBackAddTask = (formData: FormDataTypeDia) => {
        if (formData.dialogs.trim() !== '') {
            props.callBackAddTask(formData.dialogs)
        }
    }


    return (
        <div>
            <div className={s.wrapper}>
                <UsersDialog dialogs={props.dialogs}/>
                <div className={s.line}/>
                <ChatMessage messages={props.messages}/>
            </div>

            <div className={s.textarea_head}>
                <DialogsFormRedux onSubmit={callBackAddTask}/>
            </div>
        </div>
    )
}

const DialogsForm: React.FC<InjectedFormProps<FormDataTypeDia>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.title_form}>
            <Field
                name={'dialogs'}
                className={s.textarea}
                component={TextAreaFom}
                validate={[requiredField, InputVAl]}
            >

            </Field>
            <button className={`btn btn-success  ${s.btn_dialog}`}>Add MES</button>
        </form>
    )
}
const DialogsFormRedux = reduxForm<FormDataTypeDia>({
    form: "dialogs"
})(DialogsForm)


export default Dialogs;