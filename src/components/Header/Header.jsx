import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/600px-Android_O_Preview_Logo.png"
      />
    </header>
  );
}

export default Header;
