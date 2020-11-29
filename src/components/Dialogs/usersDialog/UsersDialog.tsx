import React from "react";
import s from "./UsersDialog.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/store";

type UsersDialogType = {
    dialogs: Array<DialogType>
}

const UsersDialog = (props:UsersDialogType) => {

    const personLoaded  =  props.dialogs.map(({name, id}) => {
        return (
            <div key={id} className={s.item}>
                <div className={s.avatar}> </div>
                <NavLink to={'/dialogs/' + id}> {name}</NavLink>
            </div>
        )
    });


    return (
        <div className={s.names}>
            <div className={s.dialog_items}>
                {personLoaded}
            </div>
        </div>
    )
}

export default UsersDialog;