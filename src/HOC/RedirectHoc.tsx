import React from 'react';
import {Redirect} from "react-router";
import {AppStateType} from "../redux/reduxStore";
import { useSelector} from "react-redux";



const RedirectHoc = (Wrapper:any) => {

    const ConnectedRed: (props: any) => (JSX.Element) = (props:any) => {
        const {auth:{isAuth}} = useSelector((state:AppStateType) => state)
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Wrapper{...props}/>
    }
    return ConnectedRed
}

export default RedirectHoc