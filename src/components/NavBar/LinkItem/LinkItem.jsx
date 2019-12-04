import React from 'react';
import classes from './../NavBar.module.css';
import { NavLink } from 'react-router-dom';

function LinkItem(props){
    return (
        <div className={classes.item}>
            <NavLink activeClassName={classes.activeLink} to = {props.to}>{props.text}</NavLink>
        </div>
    );
}

export default LinkItem;