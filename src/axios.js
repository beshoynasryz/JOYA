import axios from "axios";

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",  // Adjust this URL if you have a different backend URL
});

export default axiosInstance;
