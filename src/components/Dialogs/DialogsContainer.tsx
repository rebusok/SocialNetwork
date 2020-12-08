
import {addMessageActionCreator} from "../../redux/dialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state:any) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages
    }
}

const mapDispatchToProps = (dispatch:any) => {
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