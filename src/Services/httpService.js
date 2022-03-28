import axios from "axios";

//wrapper


    const host = 'https://node-api-fsa.herokuapp.com/api';
    const axiosInstance = axios.create({baseURL: host});


export default axiosInstance;