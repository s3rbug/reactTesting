import React from "react";
import { NavLink } from "react-router-dom";
import Friend from "./../Friend/Friend";
import classes from "./../LastFriends.module.css";

function FriendLink(props) {
  return (
    <NavLink className={classes.link} to={"/dialogs/" + props.id}>
      <Friend className={classes.item} name={props.name} image={props.image} />
    </NavLink>
  );
}

export default FriendLink;
