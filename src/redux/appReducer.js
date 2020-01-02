import { setMyProfile } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            initialized: true
        }
    }
    else {
        return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setMyProfile());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default appReducer;