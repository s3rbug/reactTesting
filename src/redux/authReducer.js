const SET_USER_DATA = 'SET-USER-DATA'
const SET_IS_AUTH = 'SET-IS-AUTH'

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

function authReducer(state = initialState, action) {
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
    }
    else if (action.type === SET_IS_AUTH) {
        return {
            ...state,
            isAuth: action.isAuth
        }
    }
    else {
        return state;
    }
}

export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data })
export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth })

export default authReducer;