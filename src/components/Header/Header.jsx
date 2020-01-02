import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={classes.header}>
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/600px-Android_O_Preview_Logo.png"
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div className={classes.loginWrapper}>
            {props.login} -{" "}
            <button id={classes.logoutButton} onClick={props.logout}>
              Log out
            </button>{" "}
          </div>
        ) : (
          <NavLink to="/login">
            <button id={classes.loginButton}>Login</button>
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
