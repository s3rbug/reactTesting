import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2a796e4a-a08d-43e4-b130-3ebe7f85f8b1"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (
            instance
                .get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        );
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const authAPI = {
    getMe() {
        return (
            instance
                .get(`auth/me`)
                .then(response => response.data)
        );
    }
}