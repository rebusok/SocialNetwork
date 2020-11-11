import React from "react";
import {Link} from "react-router-dom";
import classes from './Header.module.css';
const Header = () => {
    return (
        <header className={classes.header}>
            <Link to='/'><img alt='aca' className={classes.img} src='https://dcassetcdn.com/design_img/718794/445771/445771_4394919_718794_image.png'/></Link>
        </header>
    )
}
export default Header;