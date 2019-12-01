import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props){
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

function Message(props){
    return(
    <div className={classes.message}>{props.message}</div>       
    );
}

function Dialogs(props) {
    return ( 
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <DialogItem id='0' name='Stepan'></DialogItem>
                    <DialogItem id='1' name='Taras'></DialogItem>
                    <DialogItem id='2' name='Vitya'></DialogItem>
                    <DialogItem id='3' name='Vita'></DialogItem>
                    <DialogItem id='4' name='Katya'></DialogItem>
                </div>
                <div className={classes.messages}>
                    <Message message="How is your sister?"></Message>
                    <Message message="How is your brother?"></Message>
                    <Message message="How is your dick?"> </Message>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;