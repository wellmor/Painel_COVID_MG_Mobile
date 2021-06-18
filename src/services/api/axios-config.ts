import axios from 'axios';
import { API_URL, API_AUTHORIZATION } from '../../constants/config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    'content-Type': 'application/json',
    authorization: API_AUTHORIZATION,
  },
  timeout: 15000,
});

export default api;
