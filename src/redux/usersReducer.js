import { usersAPI } from './../api/api'

const FOLLOW = 'FOLLOW-CHANGED'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    countPages: 10,
    isFetching: false,
    followingInProgress: []
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
    else if (action.type === TOGGLE_FETCHING) {
        return { ...state, isFetching: action.isFetching }
    }
    else if (action.type === TOGGLE_FOLLOWING_IN_PROGRESS) {
        return {
            ...state,
            followingInProgress: action.isLoading ?
                [...state.followingInProgress, action.userId] :
                state.followingInProgress.filter(id => id !== action.userId)
        }
    }
    else
        return state
}

export const toggleFollowed = (userId) => ({ type: FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (newCurrentPage) => ({ type: SET_CURRENT_PAGE, newCurrentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })
export const toggleFollowingInProgress = (userId, isLoading) => ({ type: TOGGLE_FETCHING, isLoading, userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
                dispatch(toggleFetching(false));
            });
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.unfollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollowed(id));
                }
                dispatch(toggleFollowingInProgress(false, id));
            })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.follow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollowed(id));
                }
                dispatch(toggleFollowingInProgress(false, id));
            })
    }
}

export default usersReducer