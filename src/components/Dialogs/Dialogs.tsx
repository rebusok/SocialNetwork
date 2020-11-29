import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css';
import {addMessageActionCreator} from "../../redux/dialogReducer";
import StoreContext from "../../StoreContext";
import UsersDialog from "./usersDialog/UsersDialog";
import ChatMessage from "./ChatMessage/ChatMessage";

type DialogsType = {

    dispatch: (action:any) => any
}


const Dialogs= (props: DialogsType) => {



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


    return(
        <div>

                <StoreContext.Consumer>
                    {
                        (store) => {
                            return (
                                <div className={s.wrapper}>
                                    <UsersDialog dialogs={store.getState().dialogReducer.dialogs}/>
                                    <div className={s.line}> </div>
                                    <ChatMessage messages={store.getState().dialogReducer.messages}/>
                                </div>
                            )
                        }
                    }

                </StoreContext.Consumer>
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