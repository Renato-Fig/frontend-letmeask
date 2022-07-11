import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'letmeask.token': token } = parseCookies();

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

// ver se tá enviando o token nas requisições do backend
/* api.interceptors.request.use(config =>{
  console.info(config)

  return config
}) */

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;