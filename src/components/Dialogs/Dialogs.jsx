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
    let dialogs = [
        {id: 0, name: 'Stepan'},
        {id: 1, name: 'Taras'},
        {id: 2, name: 'Vitya'},
        {id: 3, name: 'Vita'},
        {id: 4, name: 'Katya'}
    ];

    let messages = [
        {id: 0, message: "How is your dick?"},
        {id: 1, message: '1'},
        {id: 2, message: '2'},
        {id: 3, message: '3'},
        {id: 4, message: '4'}
    ];

    let dialogsElements = dialogs.map(data => <DialogItem id={data.id} name={data.name}/>);
    let messagesElements = messages.map(data => <Message message={data.message}></Message>);

    return ( 
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;