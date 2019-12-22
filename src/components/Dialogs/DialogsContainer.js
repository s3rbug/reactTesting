//import React from 'react'
import Dialogs from './Dialogs'
import {
    sendMessage,
    changeMessage
} from "./../../redux/dialogsReducer";
import { connect } from "react-redux"


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = {
    sendMessage,
    changeMessage
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer