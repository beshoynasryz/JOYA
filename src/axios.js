import axios from "axios";

// Create an Axios instance with a dynamic base URL
const axiosInstance = axios.create({
  baseURL:"http://localhost:5000/api",  // Fallback to local URL if no backend URL is set
});

export default axiosInstance;
