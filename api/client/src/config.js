import axios from "axios";

export  const axiosInstance = axios.create({
    
    baseUrl : "https://perezbookshop.herokuapp.com/api/v1",

});