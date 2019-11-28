import React from 'react'
import classes from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={classes.nav}>

            <div className={classes.item}>
                <a alt="Profile" href="/profile">Profile</a>
            </div>
            <div className={classes.item}>
                <a alt="Messages" href="/dialogs">Messages</a>
            </div>
            <div className={classes.item}>
                <a alt="News" href="https://github.com/s3rbug">News</a>
            </div>
            <div className={classes.item}>
                <a alt="Music" href="https://github.com/s3rbug">Music</a>
            </div>
            <div className={classes.item}>
                <a alt="Settings" href="https://github.com/s3rbug">Settings</a>
            </div>

        </nav>
    );
}

export default NavBar;