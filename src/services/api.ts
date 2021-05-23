import axios from 'axios'
import baseURL from'./baseurl'

const api = axios.create({
    baseURL
})

export default api