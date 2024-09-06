import axios from "axios";
import TokenUtils from "../utils/token";

// set base url for all requests using this Axios instance:
const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 2000,
  headers: {"Content-Type": "application/json"}
})

// Add JWT as Authorization header if present (do nothing if not present):
instance.interceptors.request.use(
  (config) => {
    const token = TokenUtils.getClub()
    if (token && config.headers) {
      console.log('adding-header')
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config
  },
  (error) => {
    console.error('Request error:', error)
    if (error.response) {
      // The request returned an error
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else if (error.request) {
      // Request was made but no response
      console.error('No response received');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
)

export default instance;
