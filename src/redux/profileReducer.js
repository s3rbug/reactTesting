const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        { id: 0, postText: 'Я єбав, мене сосали', likeCount: '15', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 1, postText: 'Саске вернись в Коноху', likeCount: '20', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 2, postText: 'Аратімару, іди нахуй', likeCount: '67', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' }
    ],
    newPostText: '',
    profile: null
}

function profileReducer(state = initialState, action) {
    if (action.type === ADD_POST && state.newPostText !== '') {
        let newPost = {
            id: state.posts[state.posts.length - 1].id + 1,
            postText: state.newPostText,
            likeCount: 0,
            name: 'Sakura',
            image: 'https://www.trzcacak.rs/myfile/full/226-2262207_transparent-sakuras-doing-the-sakura-with-long-hair.png'
        }
        return { ...state, newPostText: '', posts: [...state.posts, newPost] };
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        return { ...state, newPostText: action.newText };
    }
    else if (action.type === SET_USER_PROFILE) {
        return { ...state, profile: action.info }
    }
    return state
}

export const addPost = () => ({ type: ADD_POST })
export const changePost = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (info) => ({ type: SET_USER_PROFILE, info })

export default profileReducer