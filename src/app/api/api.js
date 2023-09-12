import axios from 'axios';

const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_PRODUCTION}`
    : `${process.env.REACT_APP_DEV}`; // Change this to your development server URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // Add any other default config options here, such as headers or interceptors
});

export default axiosInstance;
