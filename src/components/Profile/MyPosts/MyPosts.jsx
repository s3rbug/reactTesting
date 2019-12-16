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
      key={data.id}
    />
  ));

  function onAddPost() {
    props.addPost();
  }

  function onChangePost(e) {
    const text = e.target.value;
    props.changePost(text);
  }

  function onPress(e) {
    if (e.key === "Enter") {
      if (e.shiftKey || e.ctrlKey) {
        if (e.ctrlKey) props.changePost(props.newPostText + "\n");
        return;
      }
      e.preventDefault();
      onAddPost();
    }
  }

  return (
    <div>
      <div className={classes.changePost}>
        <textarea
          onKeyDown={onPress}
          onChange={onChangePost}
          value={props.newPostText}
          placeholder="Share anything with your friends"
        />
        <button className={classes.add} onClick={onAddPost}>
          Add post
        </button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
