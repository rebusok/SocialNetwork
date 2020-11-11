import React from "react";
import s from './Dialogs.module.css'
import {DialogPageType} from '../../redux/state'
import {NavLink} from "react-router-dom";



const Dialogs: React.FC<DialogPageType>= (props) => {
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
    })

    return(
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
    )
}

export default Dialogs;