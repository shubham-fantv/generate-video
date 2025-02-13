import axios from "axios";
import { API_BASE_URL } from "../constants/appConstants";

// Create an instance of axios with base configuration
let axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  "Content-Type": "application/json",
});

// Helper function to retrieve the token from local storage
const getToken = () => {
  if (typeof window !== "undefined") {
    const token =
      localStorage.getItem("token") || localStorage.getItem("guestAccessToken");
    // return token;
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzI5YzdhY2E0NDkwMDRjNDhhZWQ3ZDQiLCJpYXQiOjE3MzA4MDE2NjIsImV4cCI6MTczMjYwMTY2MiwidHlwZSI6ImFjY2VzcyJ9.P1DeU1gKdWJCO5pgxhEdynoH5Gpo8jBmojWJ5K0mx-M";
  }
  return null;
};

// Request interceptor to add the token to the request headers
axiosInstance.interceptors.request.use(
  (request) => {
    // Attach authorization header for protected routes
    if (
      (request.url.includes("v1/") ||
        request.url.includes("v2/") ||
        API_BASE_URL.includes("v1") ||
        API_BASE_URL.includes("v2")) &&
      !request.url.includes("login")
    ) {
      const token = getToken();
      if (token) {
        request.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    // Add a platform header to the request
    request.headers.platform = "web";

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    // Handle errors
    if (error?.request?.responseURL?.includes("login")) {
      return Promise.reject(error);
    }
    if (
      error?.response?.status === 401 ||
      error?.response?.data?.errorCode === 403
    ) {
      // Log out the user if the token is invalid
      // logout();
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
