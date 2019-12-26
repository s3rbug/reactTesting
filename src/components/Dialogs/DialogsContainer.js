import Dialogs from './Dialogs'
import {
    sendMessage,
    changeMessage
} from "./../../redux/dialogsReducer";
import { connect } from "react-redux"
import withAuthRedirect from '../../common/hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage
})

let mapDispatchToProps = {
    sendMessage,
    changeMessage
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)//,
    //withAuthRedirect
)(Dialogs)