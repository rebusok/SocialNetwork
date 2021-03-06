import axios from 'axios';


const key = "34263072-624d-43a5-8a5f-75afa7ad4af4";
const configOMB = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
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
    login: (email:string, password:string, rememberMy:boolean) => {
        return axiosInstance.post('auth/login', {email, password, rememberMy}).then(res => res)
    },
    logOut: () => {
        return axiosInstance.delete('auth/login').then(res => res)
    }


}

export const ProfileAPI = {
    setUsersProfile:  (userId: string) => {
        return  axiosInstance.get(`profile/${userId}`).then(res => res.data)
    },
    getStatus: (userId: string) => {
        return axiosInstance.get(`profile/status/${userId}`).then(res => res)
    },
    updateStatus: (status: string) => {
        return axiosInstance.put('profile/status', {status: status}).then(res => res)
    },
    savePhoto:(photo:File) => {
        let formData = new FormData();
        formData.append('image', photo)
        return axiosInstance.put('profile/photo', formData).then(res => res.data)
    }
}


export default API;