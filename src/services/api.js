import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.reinaldowft.com',
});

export default api;
