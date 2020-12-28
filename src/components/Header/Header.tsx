import React from "react";
import {Link, NavLink} from "react-router-dom";
import classes from './Header.module.css';

import { HeaderContainerTypes } from "./HeaderContainer";

interface HeaderTypes extends HeaderContainerTypes{

}

const Header = ({auth}:HeaderTypes) => {

    const {isAuth, data, }= auth

    return (
        <header className={classes.header}>
            <Link to='/'><img alt='aca' className={classes.img} src='https://dcassetcdn.com/design_img/718794/445771/445771_4394919_718794_image.png'/></Link>
            <div className={classes.login_block}>
                { isAuth ? data.login :<NavLink to={'/login'}>Login </NavLink>}

            </div>
        </header>
    )
}
export default Header