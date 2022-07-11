import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'letmeask.token': token } = parseCookies();

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;