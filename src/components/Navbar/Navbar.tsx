import React from "react";
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={classes.item}>
                <Link to='/dialogs/'>Dialog</Link>
            </div>
            <div className={classes.item}>
                <Link to='/news'>News</Link>
            </div>
            <div className={classes.item}>
                <Link to='/users'>Users</Link>
            </div>
            <div className={classes.item}>
                <Link to='/music'>Music</Link>
            </div>
        </nav>
    )
}
export default Navbar;