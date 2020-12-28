
import React, {Component} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import Header from "./Header";
import {AuthType, DataUserType, SetUserData} from "../../redux/authReducer";
import * as axios from "axios";


export interface HeaderContainerTypes {
    auth: AuthType
    SetUserData?: (data: DataUserType) => void
}

class HeaderContainer extends Component<HeaderContainerTypes, any>{
    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then((res: any) => {
            this.props.SetUserData && this.props.SetUserData(res.data.data)
            console.log(res.data.data)
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
