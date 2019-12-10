const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, postText: 'Я єбав, мене сосали', likeCount: '15', name: 'Naruto', image: 'http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png' },
        { id: 1, postText: 'Саске вернись в Коноху', likeCount: '20', name: 'Naruto', image: 'http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png' },
        { id: 2, postText: 'Аратімару, іди нахуй', likeCount: '67', name: 'Naruto', image: 'http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png' }
      ],
      newPostText: ''
    },

    messagesPage: {
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
  },

  _callSubscriber() {
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        postText: this._state.profilePage.newPostText,
        likeCount: 0,
        name: 'Sakura',
        image: 'https://www.trzcacak.rs/myfile/full/226-2262207_transparent-sakuras-doing-the-sakura-with-long-hair.png'
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newMessage
      this._callSubscriber(this._state)
    }
    else if (action.type === SEND_MESSAGE) {
      debugger
      this._state.messagesPage.messages.push({ id: 5, message: this._state.messagesPage.newMessageText })
      this._state.messagesPage.newMessageText = ''
      this._callSubscriber(this._state)
    }
    else {
      console.log("Wrong function name!");
    }
  }
}

export const addPostAction = () => ({ type: ADD_POST })
export const updateNewPostTextAction = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const updateNewMessageTextAction = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })
export const sendMessageAction = () => ({ type: SEND_MESSAGE })

export default store
