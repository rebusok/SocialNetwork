import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import Header from "./Header";
import {SetUserDataThunk} from "../../redux/authReducer";


class HeaderContainer extends Component<PropsHeaderFromRedux, any>{
    componentDidMount() {
        this.props.SetUserDataThunk && this.props.SetUserDataThunk()
    }

    render() {
        return (
                <Header auth={this.props.auth}/>

        )
    }
}

const mapStateToProps = (state:AppStateType) => {
    return {
        auth: state.auth,
    }
}

export type PropsHeaderFromRedux = ConnectedProps<typeof connector>
const connector =connect(mapStateToProps, {
    SetUserDataThunk
})

export default connector(HeaderContainer)
