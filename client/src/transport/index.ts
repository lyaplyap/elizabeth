import axios, { AxiosError } from 'axios';

import { API_URL } from './constants';

export const createApi = () => {
    const api = axios.create({ baseURL: API_URL });
    
    api.interceptors.response.use(
        (config) => config,
        (error) => {
            if (error instanceof AxiosError && error.response?.data) {
                const { data } = error.response;
    
                throw data;
            }
    
            throw error;
        }
    );

    return api;
};

export default createApi();

