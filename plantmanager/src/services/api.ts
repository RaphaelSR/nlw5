import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.88.3.210:3333'
});

export default api;