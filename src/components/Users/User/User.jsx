import React from "react";
import defaultImage from "./../../../assets/defaultImage.jpg";
import { NavLink } from "react-router-dom";
import classes from "./User.module.css";

const User = ({
  id,
  isFetching,
  follow,
  unfollow,
  followingInProgress,
  photos,
  followed,
  name,
  status
}) => {
  return (
    <div className={isFetching ? classes.notVisible : classes.user}>
      <span>
        <div>
          <NavLink to={"/profile/" + id}>
            <img
              src={photos.large ? photos.large : defaultImage}
              alt=""
              className={classes.photo}
            />
          </NavLink>
        </div>
        <div>
          {followed ? (
            <button
              className={isFetching ? classes.notVisible : classes.btn}
              disabled={followingInProgress.some(userId => userId === id)}
              onClick={() => {
                unfollow(id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={isFetching ? classes.notVisible : classes.btn2}
              onClick={() => {
                follow(id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span className={classes.info}>
        <div>{name}</div>
        <div>{status}</div>
      </span>
    </div>
  );
};

export default User;
