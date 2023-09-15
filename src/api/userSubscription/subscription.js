import axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "338b2507-3248-457e-811e-1f2e4642f7e5"
    }
})


export const SubscriptionAPI = {
    setFollow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    setUnFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}