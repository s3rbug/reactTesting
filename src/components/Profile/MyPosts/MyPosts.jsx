import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            <div className={classes.changePost}>
                <textarea></textarea>
                <button id={classes.addPost}>Add post</button>
                <button id={classes.removePost}>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post likeCount="15" name="Naruto" message="Я єбав, мене сосали"></Post>
                <Post likeCount="20" name="Naruto" message="Саске вернись в Коноху"></Post>

            </div>
        </div>
    );
}

export default MyPosts;