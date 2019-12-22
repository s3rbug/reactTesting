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
    let stateCopy = { ...state }
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        stateCopy.newMessageText = action.newMessage
        return stateCopy
    }
    else if (action.type === SEND_MESSAGE) {
        stateCopy.messages.push({ id: stateCopy.messages[stateCopy.messages.length - 1].id + 1, message: state.newMessageText })
        stateCopy.newMessageText = ''
        return stateCopy
    }
    return state
}


export const changeMessage = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })
export const sendMessage = () => ({ type: SEND_MESSAGE })

export default dialogsReducer