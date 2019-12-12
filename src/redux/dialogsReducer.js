const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

function dialogsReducer(state, action) {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessage
    }
    else if (action.type === SEND_MESSAGE) {
        state.messages.push({ id: 5, message: state.newMessageText })
        state.newMessageText = ''
    }
    return state;
}


export const updateNewMessageTextAction = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })
export const sendMessageAction = () => ({ type: SEND_MESSAGE })

export default dialogsReducer