import React from 'react'
import Dialogs from './Dialogs'
import {
    sendMessageAction,
    updateNewMessageTextAction
} from "./../../redux/dialogsReducer";
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const sendMessage = () => {
                    store.dispatch(sendMessageAction());
                }
                const changeMessage = (text) => {
                    store.dispatch(updateNewMessageTextAction(text));
                }
                return (<Dialogs
                    sendMessage={sendMessage}
                    changeMessage={changeMessage}
                    messagesPage={store.getState().messagesPage} />)
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer