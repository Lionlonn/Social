import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const ProfileAPI = {
    getProfile(profileId) {
        return instance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    }
}