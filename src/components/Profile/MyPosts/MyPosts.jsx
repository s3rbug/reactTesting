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

  function onAddPost() {
    //props.dispatch(addPostAction());
    props.addPost();
  }

  function onChangePost(e) {
    const text = e.target.value;
    //props.dispatch(updateNewPostTextAction(text));
    props.changePost(text);
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
