const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

function profileReducer(state, action) {
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