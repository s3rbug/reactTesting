import React from 'react';
import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.item}>
            <img alt='post' src='http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png'></img>
            {props.name}: {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;