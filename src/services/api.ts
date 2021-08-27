import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhostl:3000/api'
});