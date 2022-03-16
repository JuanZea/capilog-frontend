import axios from 'axios';

const URL = 'http://localhost:8000';
export const capilogApiInstance = axios.create({ baseURL: URL });

export const updateToken = (token: string) =>
	(capilogApiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`);
