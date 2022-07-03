import axios from 'axios'

export const styleApi = axios.create({
    baseURL:'http://127.0.0.1:3001/api'
})

//interceptor req par x-token

styleApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config
})