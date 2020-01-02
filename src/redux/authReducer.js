import { authAPI } from './../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET-USER-DATA'
const _DEBUG = 'KEEP-CALM-AND-DEBUG-IT'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            ...action.payload
        }
    }
    else {
        if (action.type === _DEBUG) {
            console.log('Id: ' + state.id, 'Email: ' + state.email, 'Login: ' + state.login, 'IsAuth: ' + state.isAuth);
        }
        return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
//const _printState = () => ({ type: _DEBUG })

export const setMyProfile = () => {
    return (dispatch) => {
        return authAPI.getMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setMyProfile());
                }
                else {
                    const message = response.messages.length > 0 ? response.messages[0] : "Login or password seem to be wrong";
                    dispatch(stopSubmit("login", { _error: message }))
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

export default authReducer;