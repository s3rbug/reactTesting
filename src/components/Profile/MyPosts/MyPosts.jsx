import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  const postsElements = props.posts.map(data => (
    <Post
      likeCount={data.likeCount}
      name={data.name}
      message={data.postText}
      image={data.image}
    />
  ));

  const newPostElement = React.createRef();

  function onAddPost() {
    props.dispatch({ type: "ADD-POST" });
  }

  function onChangePost() {
    const text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  }

  return (
    <div>
      <div className={classes.changePost}>
        <textarea
          onChange={onChangePost}
          value={props.newPostText}
          ref={newPostElement}
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
