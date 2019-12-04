import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}></MyPosts>
        </div>
    );
}

export default Profile;