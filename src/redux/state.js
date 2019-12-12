import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"
import dialogsReducer from "./dialogsReducer"


const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, postText: 'Я єбав, мене сосали', likeCount: '15', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 1, postText: 'Саске вернись в Коноху', likeCount: '20', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 2, postText: 'Аратімару, іди нахуй', likeCount: '67', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' }
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
    },

    sidebar: {}

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}

export default store
