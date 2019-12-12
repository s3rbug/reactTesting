import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostAction,
  updateNewPostTextAction
} from "./../../../redux/profileReducer";

function MyPosts(props) {
  const postsElements = props.posts.map(data => (
    <Post
      likeCount={data.likeCount}
      name={data.name}
      message={data.postText}
      image={data.image}
    />
  ));

  function onAddPost() {
    props.dispatch(addPostAction());
  }

  function onChangePost(e) {
    const text = e.target.value;
    props.dispatch(updateNewPostTextAction(text));
  }

  return (
    <div>
      <div className={classes.changePost}>
        <textarea onChange={onChangePost} value={props.newPostText} />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
