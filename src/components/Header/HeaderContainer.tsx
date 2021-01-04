
import React, {Component} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import Header from "./Header";
import {AuthType, SetUserDataThunk} from "../../redux/authReducer";




export interface HeaderContainerTypes {
    auth: AuthType
    SetUserDataThunk?: () => void
}

class HeaderContainer extends Component<HeaderContainerTypes, any>{
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



export default connect(mapStateToProps, {
    SetUserDataThunk
})(HeaderContainer)
