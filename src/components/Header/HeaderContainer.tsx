
import React, {Component} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import Header from "./Header";
import {AuthType, DataUserType, SetUserData} from "../../redux/authReducer";

import API from "../../API/API";


export interface HeaderContainerTypes {
    auth: AuthType
    SetUserData?: (data: DataUserType) => void
}

class HeaderContainer extends Component<HeaderContainerTypes, any>{
    componentDidMount() {
        API.authMe().then((res: any) => {
            this.props.SetUserData && this.props.SetUserData(res.data)
            console.log(res)
        })
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
    SetUserData
})(HeaderContainer)
