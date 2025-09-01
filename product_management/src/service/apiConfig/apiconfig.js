import axios from "axios";
import backEndUrl from "../constants";

var createAxiosClient = axios.create(
    {
        baseURL:backEndUrl,
        timeout:"1000000"

    }
)

createAxiosClient.interceptors.request.use(
    (config) =>{
 var token =    localStorage.getItem("token");
 if(token){
    config.headers.Authorization = `Bearer ${token}`
 }
 return config;
    },
     (error) => {
    // If request fails before sending
    return Promise.reject(error);
  }

)

// RESPONSE INTERCEPTOR – Handle errors globally
createAxiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Unauthorized → maybe token expired → logout or refresh
      console.warn("Unauthorized! Token may have expired.");
      // Optionally redirect to login:
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default createAxiosClient;