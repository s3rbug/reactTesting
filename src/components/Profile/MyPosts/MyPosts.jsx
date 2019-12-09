import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let postsElements = props.posts.map(data => <Post likeCount={data.likeCount} name={data.name} message={data.postText} image = {data.image}></Post>);
    let newPostElement = React.createRef();

    function onAddPost(){
        props.addPost()
    }

    function onChangePost(){
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <div className={classes.changePost}>
                <textarea onChange={onChangePost} value={props.newPostText} ref={newPostElement}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;