import React from "react";
import classes from "./NavBar.module.css";
import LinkItem from "./LinkItem/LinkItem";
import LastFriends from "./LastFriends/LastFriends";

function NavBar() {
  return (
    <nav className={classes.nav}>
      <LinkItem to="/profile" text="Profile" />
      <LinkItem to="/dialogs" text="Dialogs" />
      <LinkItem to="/news" text="News" />
      <LinkItem to="/music" text="Music" />
      <LinkItem to="/settings" text="Settings" />
      <LastFriends />
    </nav>
  );
}

export default NavBar;
