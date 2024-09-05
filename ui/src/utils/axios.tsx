import axios from "axios";
import TokenUtils from "../utils/token";

// set base url for all requests using this Axios instance:
const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  headers: {"Content-Type": "application/json"}
});

// Add JWT as Authorization header if present (do nothing if not present):
instance.interceptors.request.use(
  (config) => {
    const token = TokenUtils.getClub();
    if (token && config.headers) {
      console.log('adding-header');
      config.headers.Authorization = "Bearer " + token;
    }
    else {
      console.log('Not adding a header');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
