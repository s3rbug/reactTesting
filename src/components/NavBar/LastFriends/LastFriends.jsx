import React from "react";
import classes from "./LastFriends.module.css";
import FriendLink from "./FriendLink/FriendLink";

function LastFriends() {
  return (
    <div className={classes.lastFriends}>
      <span className={classes.header}>Last friends:</span>
      <div className={classes.wrapper}>
        <FriendLink
          id="0"
          image="https://www.trzcacak.rs/myfile/full/226-2262207_transparent-sakuras-doing-the-sakura-with-long-hair.png"
          name="Sakura"
        />
        <FriendLink
          id="0"
          image="https://www.trzcacak.rs/myfile/full/226-2262207_transparent-sakuras-doing-the-sakura-with-long-hair.png"
          name="Sakura"
        />
        <FriendLink
          id="0"
          image="https://www.trzcacak.rs/myfile/full/226-2262207_transparent-sakuras-doing-the-sakura-with-long-hair.png"
          name="Sakura"
        />
      </div>
    </div>
  );
}

export default LastFriends;
