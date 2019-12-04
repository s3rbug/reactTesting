import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    
    let postsElements = props.posts.map(data => <Post likeCount={data.likeCount} name={data.name} message={data.postText} image = {data.image}></Post>);

    return (
        <div>
            <div className={classes.changePost}>
                <textarea></textarea>
                <button id={classes.addPost}>Add post</button>
                <button id={classes.removePost}>Remove</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;