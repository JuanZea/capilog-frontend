import axios from 'axios';

const URL = 'http://192.168.56.1:8000';
export const capilogApiInstance = axios.create({ baseURL: URL });

export const updateToken = (token: string) =>
	(capilogApiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`);
