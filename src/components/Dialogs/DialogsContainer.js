import Dialogs from './Dialogs'
import {
    sendMessage,
    changeMessage
} from "./../../redux/dialogsReducer";
import { connect } from "react-redux"
import withAuthRedirect from '../../common/hoc/withAuthRedirect';


let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage
})

let mapDispatchToProps = {
    sendMessage,
    changeMessage
}
const DialogsWithAutoRedirect = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAutoRedirect)

export default DialogsContainer