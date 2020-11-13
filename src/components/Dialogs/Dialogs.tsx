import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css'
import { DialogType, MessageType } from '../../redux/state'
import {NavLink} from "react-router-dom";

type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (message: string) => void
}


const Dialogs= (props: DialogsType) => {
    const {dialogs, messages} = props
    const perosnLoaded  =  dialogs.map(({name, id}) => {
            return (
                <div key={id} className={s.item}>
                    <div className={s.avatar}> </div>
                    <NavLink to={'/dialogs/' + id}> {name}</NavLink>
                </div>
            )
        });
    const avaUrl = 'https://yt3.ggpht.com/a-/AAuE7mCbfWojLQOCaK9L9GFGYos67xBELhYnV0Rcuw=s800-mo-c-c0xffffffff-rj-k-no'
    const messageDial = messages.map(({id, message}) => {
        return(
            <div key={id} className={s.wrap}>
                <div className={s.person}>
                    <div className={s.person_img}><img alt='ava' src={avaUrl}/></div>
                    <div className={s.person_title}>My</div>
                </div>
                <div className={s.text}>{message}</div>

            </div>
        )
    });
    const [value, setTitle] = useState('');

    const callBackAddTask = () => {
        if (value.trim() !== ''){
            props.addMessage(value);

        } 
        setTitle('');
    }
    const onTitleChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value);
    }
    

    return(
        <div>
            <div className={s.wrapper}>
                <div className={s.names}>
                    <div className={s.dialog_items}>
                        {perosnLoaded}
                    </div>
                </div>
                <div className={s.line}> </div>
                <div className={s.message}>
                    {messageDial}
                </div>
                
            </div>
            <div className={s.textarea_head}>
                <textarea 
                    className={s.textarea}
                    value={value}
                    onChange={onTitleChangeHandler} >

                 </textarea>
            <button className={`btn btn-success  ${s.btn_dialog}`} onClick={callBackAddTask}>Add MES</button></div>
        </div>
    )
}

export default Dialogs;