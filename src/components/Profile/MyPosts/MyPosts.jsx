import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postsElements = props.posts.map(data => <Post likeCount={data.likeCount} name={data.name} message={data.postText} image = {data.image}></Post>);
    let newPostElement = React.createRef();
    function addPost(event){
        props.addPost(newPostElement.current.value);
        newPostElement.current.value = "";
    }

    return (
        <div>
            <div className={classes.changePost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost} id={classes.addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;