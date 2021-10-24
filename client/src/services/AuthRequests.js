import axios from 'axios'

export const postRegister = (body) => {
    axios.post('', body)
    .then(res => res.data)
}

export const postLogin = (body) => {
    axios.post('', body)
    .then(res => res.data)
}