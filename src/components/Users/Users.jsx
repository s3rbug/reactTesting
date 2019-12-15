import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";

const Users = props => {
  const defaultImage =
    "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg";
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items);
      });
  }
  const usersElement = props.users.map(u => (
    <div key={u.id}>
      <span>
        <div>
          <img
            src={u.photos.large === null ? defaultImage : u.photos.large}
            alt=""
            className={classes.photo}
          />
        </div>
        <div>
          {u.followed ? (
            <button
              className={classes.btn}
              onClick={() => {
                props.follow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={classes.btn2}
              onClick={() => {
                props.follow(u.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>u.location.country</div>
          <div>u.location.city</div>
        </span>
      </span>
    </div>
  ));
  return <div>{usersElement}</div>;
};

export default Users;
