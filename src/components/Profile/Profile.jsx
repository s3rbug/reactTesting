import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} posts={props.profilePage.posts} addPost={props.addPost}></MyPosts>
        </div>
    );
}

export default Profile;