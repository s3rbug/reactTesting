import React from 'react';
import classes from './NavBar.module.css';
import LinkItem from './LinkItem/LinkItem';
import LastFriends from './LastFriends/LastFriends'

function NavBar() {
    return (
        <nav className={classes.nav}>
            <LinkItem to="/profile" text="Profile"></LinkItem>
            <LinkItem to="/dialogs" text="Dialogs"></LinkItem>
            <LinkItem to="/news" text="News"></LinkItem>
            <LinkItem to="/music" text="Music"></LinkItem>
            <LinkItem to="/settings" text="Settings"></LinkItem>
            <LastFriends></LastFriends>
        </nav>
    );
}

export default NavBar;