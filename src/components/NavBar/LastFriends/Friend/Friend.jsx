import React from 'react';
import classes from './Friend.module.css';

function Friend(props){
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={props.image} alt="friend"/>
            <span className={classes.name}> {props.name} </span>
        </div>
    );
}

export default Friend;