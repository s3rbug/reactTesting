import { authAPI } from './../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth/SET-USER-DATA'

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
        return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const setMyProfile = () => {
    return async (dispatch) => {
        let response = await authAPI.getMe();
        if (response.resultCode === 0) {
            let { id, login, email } = response.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
        if (response.resultCode === 0) {
            dispatch(setMyProfile());
        }
        else {
            const message = response.messages.length > 0 ? response.messages[0] : "Login or password seem to be wrong";
            dispatch(stopSubmit("login", { _error: message }))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;