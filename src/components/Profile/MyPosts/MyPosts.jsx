import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post likeCount="15" name="Naruto" message="Я єбав, мене сосали"></Post>
                <Post likeCount="20" name="Naruto" message="Саске вернись в Коноху"></Post>

            </div>
        </div>
    );
}

export default MyPosts;