const FOLLOW = 'FOLLOW-CHANGED'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    countPages: 10
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
        return { ...state, users: action.users }
    }
    else if (action.type === SET_CURRENT_PAGE) {
        return { ...state, currentPage: action.newCurrentPage }
    }
    else if (action.type === SET_TOTAL_COUNT) {
        return { ...state, totalCount: action.totalCount }
    }
    else
        return state
}

export const followAction = (userId) => ({ type: FOLLOW, userId })
export const setUsersAction = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAction = (newCurrentPage) => ({ type: SET_CURRENT_PAGE, newCurrentPage })
export const setTotalCountAction = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })

export default usersReducer