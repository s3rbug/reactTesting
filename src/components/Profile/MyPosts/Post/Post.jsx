import React from 'react';
import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.item}>
            <img alt='post' src={props.image}></img>
            {props.name}: {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;