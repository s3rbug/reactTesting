import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

function Dialogs(props) {
    let dialogsElements = props.dialogs.map(data => <DialogItem id={data.id} name={data.name}/>);
    let messagesElements = props.messages.map(data => <Message message={data.message}></Message>);

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