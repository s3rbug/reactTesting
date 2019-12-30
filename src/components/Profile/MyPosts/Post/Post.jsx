import React from "react";
import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={props.isMine ? classes.myPost : classes.post}>
      <div className={classes.item}>
        <img alt="post" src={props.image} />
        <span className={classes.name}>{props.name}</span>: {props.message}
        <div>
          <span>like {props.likeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
