import axios from 'axios';
import { API_URL } from '../../config/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    'content-Type': 'application/json',
  },
  timeout: 15000,
});

export default api;
