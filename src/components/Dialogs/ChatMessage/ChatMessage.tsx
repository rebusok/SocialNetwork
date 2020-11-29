import React from "react";
import s from "./ChatMessage.module.css";
import {MessageType} from "../../../redux/store";

type ChatMessageType = {
    messages: Array<MessageType>
}



const ChatMessage = (props:ChatMessageType) => {
    const avaUrl = 'https://yt3.ggpht.com/a-/AAuE7mCbfWojLQOCaK9L9GFGYos67xBELhYnV0Rcuw=s800-mo-c-c0xffffffff-rj-k-no'
    const messageDial = props.messages.map(({id, message}) => {
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


    return (
        <div className={s.message}>
            {messageDial}
        </div>
    )
}

export default ChatMessage;