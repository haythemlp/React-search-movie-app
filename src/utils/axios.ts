import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com'
const API_KEY = 'ce554ad3'

const instance = axios.create({
    baseURL:BASE_URL,
});


instance.interceptors.request.use(
    function (config) {
        config.params = {...config.params, apikey:API_KEY}
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);
instance.interceptors.response.use(
    function (res) {
        // Do something before request is sent
        return res;
    },
    async function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Alter defaults after instance has been created

export default instance;
