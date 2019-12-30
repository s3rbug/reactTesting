import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

function MyPosts(props) {
  const postsElements = props.posts.map(data => (
    <Post
      isMine={data.isMine}
      likeCount={data.likeCount}
      name={data.name}
      message={data.postText}
      image={data.image}
      key={data.id}
    />
  ));

  const addPost = value => {
    props.addPost(value.newPostText);
    value.newPostText = "";
  };

  return (
    <div>
      <AddPostReduxForm onSubmit={addPost} />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
}

const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.changePost}>
        <Field
          component="textarea"
          name="newPostText"
          placeholder="Share anything with your friends"
        />
        <button className={classes.add}>Add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: "addPostReduxForm"
})(AddPostForm);

export default MyPosts;
