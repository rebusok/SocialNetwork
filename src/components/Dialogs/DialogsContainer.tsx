
import {addMessageActionCreator, DialogDispatchType} from "../../redux/dialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/reduxStore";
import RedirectHoc from "../../HOC/RedirectHoc";
import {compose} from "redux";
import React from "react";

const mapStateToProps = (state:AppStateType) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages
    }
}

const mapDispatchToProps = (dispatch:DialogDispatchType) => {
    return {
        callBackAddTask: (value:string) => {
            if (value.trim() !== ''){
                dispatch(addMessageActionCreator(value));
            }
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    RedirectHoc)(Dialogs) as React.FunctionComponent<any>