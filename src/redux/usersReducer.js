import { usersAPI } from './../api/api'

const TOGGLE_FOLLOW = 'users/TOGGLE-FOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'users/SET-TOTAL-COUNT'
const TOGGLE_FETCHING = 'users/TOGGLE-FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'users/TOGGLE-FOLLOWING-IN-PROGRESS'

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
    if (action.type === TOGGLE_FOLLOW) {
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
        return state;
}

export const toggleFollowed = userId => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = newCurrentPage => ({ type: SET_CURRENT_PAGE, newCurrentPage });
export const setTotalUsersCount = totalCount => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching });
export const toggleFollowingInProgress = (userId, isLoading) => ({ type: TOGGLE_FETCHING, isLoading, userId });

export const getUsers = (currentPage, pageSize) => {
    return async dispatch => {
        dispatch(toggleFetching(true));
        const response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(toggleFetching(false));
    }
}

const followUnfollowFlow = async (dispatch, id, apiMethod) => {
    dispatch(toggleFollowingInProgress(true, id));
    const response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(toggleFollowed(id));
    }
    dispatch(toggleFollowingInProgress(false, id));
}

export const unfollow = id => {
    return async dispatch => {
        followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI));
    }
}

export const follow = id => {
    return async dispatch => {
        followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI));
    }
}

export default usersReducer