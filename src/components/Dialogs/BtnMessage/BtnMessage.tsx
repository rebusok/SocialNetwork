import React, {ChangeEvent, useState} from "react";
import {addMessageActionCreator} from "../../../redux/dialogReducer";
import s from "./BtnMessage.module.css";
type BtnMessageType = {
    dispatch: (action:any) => any
}

const BtnMessage = (props:BtnMessageType) => {
    const [value, setTitle] = useState('');

    const callBackAddTask = () => {
        if (value.trim() !== ''){
            props.dispatch(addMessageActionCreator(value));

        }
        setTitle('');
    }
    const onTitleChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }


    return (
        <div className={s.textarea_head}>
                <textarea
                    className={s.textarea}
                    value={value}
                    onChange={onTitleChangeHandler} >

                 </textarea>
            <button className={`btn btn-success  ${s.btn_dialog}`} onClick={callBackAddTask}>Add MES</button></div>
    )
}


export default BtnMessage;