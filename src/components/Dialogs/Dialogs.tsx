import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css';
import UsersDialog from "./usersDialog/UsersDialog";
import ChatMessage from "./ChatMessage/ChatMessage";
import {DialogPageType} from "../../redux/store";



export type DialogsType = DialogPageType & {
    callBackAddTask: (value: string) => void
    isAuth: boolean
}


const Dialogs = (props: DialogsType) => {


    const [value, setTitle] = useState('');

    const callBackAddTask = () => {
        if (value.trim() !== '') {
            props.callBackAddTask(value)
        }
        setTitle('');
    }
    const onTitleChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }


    return (
        <div>
            <div className={s.wrapper}>
                <UsersDialog dialogs={props.dialogs}/>
                <div className={s.line}></div>
                <ChatMessage messages={props.messages}/>
            </div>

            <div className={s.textarea_head}>
                <textarea
                    className={s.textarea}
                    value={value}
                    onChange={onTitleChangeHandler}>

                 </textarea>
                <button className={`btn btn-success  ${s.btn_dialog}`} onClick={callBackAddTask}>Add MES</button>
            </div>
        </div>
    )


}


export default Dialogs;