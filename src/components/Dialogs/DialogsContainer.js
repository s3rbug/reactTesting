//import React from 'react'
import Dialogs from './Dialogs'
import {
    sendMessageAction,
    updateNewMessageTextAction
} from "./../../redux/dialogsReducer";
import { connect } from "react-redux"


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAction());
        },
        changeMessage: (text) => {
            dispatch(updateNewMessageTextAction(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer