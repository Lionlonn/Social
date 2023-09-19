import axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "338b2507-3248-457e-811e-1f2e4642f7e5"
    }
})


export const HeaderAPI = {
    getUser(){
        return instance.get(`auth/me`,)
            .then(response => {
                return response.data
                
        })}
}