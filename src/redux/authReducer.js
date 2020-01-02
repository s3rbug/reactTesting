import { authAPI } from './../api/api'

const SET_USER_DATA = 'SET-USER-DATA'
const _DEBUG = 'I-JUST-KEEP-DEBUGGING-THIS-ONE'

let initialState = {
    id: null,
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
        authAPI.getMe()
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