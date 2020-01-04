import { profileAPI } from './../api/api'
import defaultImage from './../assets/defaultImage.jpg'

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    posts: [
        { id: 0, userId: -1, isMine: false, postText: 'Я єбав, мене сосали', likeCount: '15', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 1, userId: -1, isMine: false, postText: 'Саске вернись в Коноху', likeCount: '20', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 2, userId: -1, isMine: false, postText: 'Аратімару, іди нахуй', likeCount: '67', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' }
    ],
    status: '',
    profile: null
}

function profileReducer(state = initialState, action) {
    if (action.type === ADD_POST) {
        let newPost = {
            id: state.posts[state.posts.length - 1].id + 1,
            userId: state.profile.userId,
            isMine: true,
            postText: action.newPost,
            likeCount: 0,
            name: state.profile.fullName,
            image: state.profile.photos.large === null ? defaultImage : state.profile.photos.large
        }

        return { ...state, newPostText: '', posts: [...state.posts, newPost] };
    }
    else if (action.type === DELETE_POST) {
        let posts1 = state.posts.filter(el => {
            return el.id !== action.deletedPostId
        });
        return {
            ...state,
            posts: posts1
        }
    }
    else if (action.type === SET_USER_PROFILE) {
        if (state.profile !== null)
            state.posts.forEach(el => {
                el.isMine = (action.info.userId === el.userId)
            });
        return { ...state, profile: action.info }
    }
    else if (action.type === SET_STATUS) {
        return { ...state, status: action.status }
    }
    return state
}

export const addPost = (newPost) => ({ type: ADD_POST, newPost })
export const deletePost = (deletedPostId) => ({ type: DELETE_POST, deletedPostId })
export const setUserProfile = (info) => ({ type: SET_USER_PROFILE, info })
export const setNewStatus = (status) => ({ type: SET_STATUS, status })

export const setUser = (userId) => {
    return (dispatch) => {
        profileAPI.getUser(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((response) => {
                dispatch(setNewStatus(response))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(setNewStatus(response))
                }
            })
    }
}


export default profileReducer