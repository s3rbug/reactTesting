const FOLLOW = 'FOLLOW-CHANGED'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: []
}

function usersReducer(state = initialState, action) {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return { ...u, followed: !u.followed }
                }
                return u;
            })
        }
    }
    else if (action.type === SET_USERS) {
        return { ...state, users: [...state.users, ...action.users] }
    }
    else
        return state
}

export const followAction = (userId) => ({ type: FOLLOW, userId })
export const setUsersAction = (users) => ({ type: SET_USERS, users: users });

export default usersReducer