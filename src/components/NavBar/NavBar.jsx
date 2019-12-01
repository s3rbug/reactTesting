import React from 'react'
import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className={classes.nav}>

            <div className={classes.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>

        </nav>
    );
}

export default NavBar;