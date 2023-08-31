// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_PRODUCTION, // Example API URL
});

export default instance