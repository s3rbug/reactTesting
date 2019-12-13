import React from 'react'
import Dialogs from './Dialogs'
import {
    sendMessageAction,
    updateNewMessageTextAction
} from "./../../redux/dialogsReducer";

const DialogsContainer = (props) => {
    const sendMessage = () => {
        props.store.dispatch(sendMessageAction());
    }
    const changeMessage = (text) => {
        props.store.dispatch(updateNewMessageTextAction(text));
    }
    return (
        <Dialogs
            sendMessage={sendMessage}
            changeMessage={changeMessage}
            messagesPage={props.store.getState().messagesPage} />
    );
}

export default DialogsContainer