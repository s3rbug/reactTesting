const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 0, message: 'How is your dick?' },
        { id: 1, message: '1' },
        { id: 2, message: '2' },
        { id: 3, message: '3' },
        { id: 4, message: '4' }
    ],
    dialogs: [
        { id: 0, name: 'Stepan' },
        { id: 1, name: 'Taras' },
        { id: 2, name: 'Vitya' },
        { id: 3, name: 'Vita' },
        { id: 4, name: 'Katya' }
    ],
    newMessageText: ''
}

function dialogsReducer(state = initialState, action) {
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