import React from 'react';
import Friend from './Friend/Friend';
import classes from './LastFriends.module.css';

function LastFriends(){
    return(
        <div className={classes.wrapper}>
            <span className={classes.header}>Last friends:</span>
            <Friend className={classes.item}/>
            <Friend className={classes.item}/>
            <Friend className={classes.item}/>
        </div>
    );
}

export default LastFriends;