import axios from 'axios';
import queryString from "query-string";
// data
import { baseConfig } from './baseConfig';

export const axiosClient = axios.create({
    baseURL: baseConfig.baseUrl,
    headers: {
        "Content-Type" : "application/json"
    },
    paramsSerializer : params => queryString.stringify({...params, api_key: baseConfig.apiKey})
})

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response)=> {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, e => {
    throw e ;
})