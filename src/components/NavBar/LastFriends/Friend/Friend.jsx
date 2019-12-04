import React from 'react';
import classes from './Friend.module.css';

function Friend(props){
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src="https://www.trzcacak.rs/myfile/full/226-2262207_transparent-sakuras-doing-the-sakura-with-long-hair.png" alt="friend"/>
        <span className={classes.name}>Stepan</span>
        </div>
    );
}

export default Friend;