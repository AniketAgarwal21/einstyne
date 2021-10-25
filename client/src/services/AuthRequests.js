import axios from 'axios'

export const postRegister = (body) => axios.post('/register', body)
export const postLogin = (body) => axios.post('/login', body)
