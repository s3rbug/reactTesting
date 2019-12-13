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
    if (action.type === ADD_POST && state.newPostText !== '') {
        const newPost = {
            id: 5,
            postText: state.newPostText,
            likeCount: 0,
            name: 'Sakura',
            image: 'https://www.trzcacak.rs/myfile/full/226-2262207_transparent-sakuras-doing-the-sakura-with-long-hair.png'
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }

    return state;
}

export const addPostAction = () => ({ type: ADD_POST })
export const updateNewPostTextAction = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer