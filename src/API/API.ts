import axios from 'axios';


const key = "be583272-b0d8-4135-8f53-6b8fcf5092e2";
const configOMB = {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": key
    }
};

const axiosInstance = axios.create(configOMB);


const API = {
    getUsers: async (currentPage: number, pageSize: number) => {

        return await axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)

    },

    Unfollow: async (UserId: number) => {
        return await axiosInstance.delete(`follow/${UserId}`).then(res => res.data)
    },
    Follow: async (UserId: number, UserData: {}) => {
        return await axiosInstance.post(`follow/${UserId}`, UserData).then(res => res.data)
    },
    authMe: async () => {
        return await axiosInstance.get(`auth/me`).then(res => res.data)
    },

}

export const ProfileAPI = {
    setUsersProfile: async (userId: string) => {
        return await axiosInstance.get(`profile/${userId}`).then(res => res.data)
    },
    getStatus: (userId: string) => {
        return axiosInstance.get(`profile/status/${userId}`).then(res => res)
    },
    updateStatus: (status: string) => {
        return axiosInstance.put('profile/status', {status}).then(res => res)
    }
}


export default API;