import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Header.module.css';
import {AuthType, LogOut} from "../../redux/authReducer";
import {useDispatch} from "react-redux";

interface HeaderTypes {
    auth: AuthType
}

const Header = (props: HeaderTypes) => {

    const {isAuth, data,} = props.auth
    const dispatch  = useDispatch()
    const logOutn = () => {
        dispatch(LogOut())
    }
    return (
        <header className={classes.header}>
            <NavLink to='/profile'><img alt='aca' className={classes.img}
                                 src='https://dcassetcdn.com/design_img/718794/445771/445771_4394919_718794_image.png'/></NavLink>
            <div className={classes.login_block}>
                {isAuth
                    ? <div>
                        <div>{data.login}</div>
                        <div><NavLink to={'/'} onClick={logOutn}> logOut</NavLink></div>
                    </div>
                    : <NavLink to={'/login'} >Login </NavLink>}

            </div>
        </header>
    )
}
export default Header