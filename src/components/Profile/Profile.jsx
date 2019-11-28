import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img alt="cool" src="https://umanpivo.ua/Media/images/catalog/main_image/4a9209ed43cb89353d6d2762b8d3a0f9.jpg"></img>
            </div>
            <div className={classes.item}>
                ava + desc
            </div>
            <div className={classes.item}>
                my posts
            </div>
            <MyPosts></MyPosts>
        </div>
    );
}

export default Profile;