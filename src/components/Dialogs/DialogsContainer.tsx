
import {addMessageActionCreator, DialogDispatchType} from "../../redux/dialogReducer";
import {connect, ConnectedProps} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/reduxStore";
import RedirectHoc from "../../HOC/RedirectHoc";
import {compose} from "redux";
import {ComponentType} from "react";

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
export type PropsDialogsFromRedux = ConnectedProps<typeof connector>
const connector =connect(mapStateToProps, mapDispatchToProps)

export default compose<ComponentType>(
    connector,
    RedirectHoc)(Dialogs)