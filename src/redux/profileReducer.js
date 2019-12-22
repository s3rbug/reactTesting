const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, postText: 'Я єбав, мене сосали', likeCount: '15', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 1, postText: 'Саске вернись в Коноху', likeCount: '20', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 2, postText: 'Аратімару, іди нахуй', likeCount: '67', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' }
    ],
    newPostText: ''
}

function profileReducer(state = initialState, action) {
    let stateCopy = { ...state }
    if (action.type === ADD_POST && state.newPostText !== '') {
        let newPost = {
            id: state.posts[state.posts.length - 1].id + 1,
            postText: state.newPostText,
            likeCount: 0,
            name: 'Sakura',
            image: 'https://www.trzcacak.rs/myfile/full/226-2262207_transparent-sakuras-doing-the-sakura-with-long-hair.png'
        }

        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ''
        return stateCopy;
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        stateCopy.newPostText = action.newText
        return stateCopy;
    }
    return state
}

export const addPost = () => ({ type: ADD_POST })
export const changePost = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer