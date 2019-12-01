import React from 'react';
import classes from './ProfileInfo.module.css'

function ProfileInfo(){
    return(
        <div>
            <div>
                <img className = {classes.bg} alt="cool" src="https://umanpivo.ua/Media/images/catalog/main_image/4a9209ed43cb89353d6d2762b8d3a0f9.jpg"></img>
            </div>
            <div className={classes.description}>
                ava + desc
            </div>
        </div>
    );
}

export default ProfileInfo;