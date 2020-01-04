const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

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
        { id: 3, name: 'Avramenko' },
        { id: 4, name: 'Putin' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = { ...state }
    if (action.type === SEND_MESSAGE) {
        stateCopy.messages.push({ id: stateCopy.messages[stateCopy.messages.length - 1].id + 1, message: action.message })
        return stateCopy
    }
    return state
}


export const sendMessage = (message) => ({ type: SEND_MESSAGE, message })

export default dialogsReducer