import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Header.module.css';
import {AuthType, LogOut} from "../../redux/authReducer";
import {useDispatch} from "react-redux";
import {ExportOutlined}  from '@ant-design/icons';
interface HeaderTypes {
    auth: AuthType
}

const Header = (props: HeaderTypes) => {

    const {isAuth, data,} = props.auth
    const dispatch = useDispatch()
    const logOutn = () => {
        dispatch(LogOut())
    }
    return (

        < >
            {isAuth
                ? <div className={classes.login_block}>
                    <div className={classes.login_name}>{data.login}</div>
                    <div className={classes.log_out}><NavLink to={'/'} onClick={logOutn}> <ExportOutlined /></NavLink></div>
                </div>
                : <NavLink to={'/login'}>Login </NavLink>}

        </>

    )
}
export default Header