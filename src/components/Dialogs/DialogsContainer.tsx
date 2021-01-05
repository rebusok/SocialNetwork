
import {addMessageActionCreator, DialogDispatchType} from "../../redux/dialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/reduxStore";

const mapStateToProps = (state:AppStateType) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        isAuth: state.auth.isAuth
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
const DialogContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogContainer;